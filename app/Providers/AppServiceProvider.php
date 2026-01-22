<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share('translations', function () {
            $translations = [];

            foreach (File::directories(lang_path()) as $localePath) {
                $locale = basename($localePath);

                foreach (File::files($localePath) as $file) {
                    $translations[$locale][$file->getFilenameWithoutExtension()] =
                        require $file->getPathname();
                }
            }

            return $translations;
        });

        Inertia::share([
            'locale' => fn () => app()->getLocale(),
        ]);
    }
}
