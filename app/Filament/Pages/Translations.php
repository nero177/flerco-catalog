<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use BackedEnum;

class Translations extends Page
{
    protected string $view = 'filament.pages.translations';
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-language';

    public string $activeTab = 'en';

    public array $translations = [
        'en' => '',
        'ru' => '',
        'uk' => '',
    ];

    public ?string $statusMessage = null;
    public ?string $statusType = null;

    public function mount(): void
    {
        foreach (array_keys($this->translations) as $locale) {
            $path = resource_path("locales/{$locale}.json");
            if (file_exists($path)) {
                $content = file_get_contents($path);
                $this->translations[$locale] = $content === false ? '{}' : $content;
            } else {
                $this->translations[$locale] = "{}";
            }
        }
    }

    public function save(): void
    {
        foreach ($this->translations as $locale => $content) {
            $decoded = json_decode($content, true);
            if (json_last_error() !== JSON_ERROR_NONE) {
                dd($content);
                $this->statusType = 'error';
                $this->statusMessage = "Invalid JSON for locale {$locale}: " . json_last_error_msg();
                return;
            }

            $path = resource_path("locales/{$locale}.json");
            $json = json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            file_put_contents($path, $json);
        }

        $this->statusType = 'success';
        $this->statusMessage = 'Translations saved successfully.';
    }
}
