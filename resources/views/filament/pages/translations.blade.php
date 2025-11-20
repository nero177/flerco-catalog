<x-filament-panels::page>
    <x-filament::tabs label="Content tabs">
        <x-filament::tabs.item :active="$activeTab === 'en'" wire:click="$set('activeTab', 'en')">
            EN
        </x-filament::tabs.item>
        <x-filament::tabs.item :active="$activeTab === 'ru'" wire:click="$set('activeTab', 'ru')">
            RU
        </x-filament::tabs.item>
        <x-filament::tabs.item :active="$activeTab === 'uk'" wire:click="$set('activeTab', 'uk')">
            UK
        </x-filament::tabs.item>
    </x-filament::tabs>

    @if ($statusMessage)
        <div class="mt-3 text-sm {{ $statusType === 'success' ? 'text-green-600' : 'text-red-600' }}">
            {{ $statusMessage }}</div>
    @endif

    <div class="mt-4" wire:key="editor-{{ $activeTab }}">
        <textarea style="width: 100%; margin-bottom: 1rem; border: 1px solid #fff; border-radius: 1rem;" wire:model.lazy="translations.{{ $activeTab }}" rows="20"
            class="w-full mt-2 font-mono border rounded p-2"></textarea>

        <x-filament::button wire:click="save">
            Save
        </x-filament::button>
    </div>
</x-filament-panels::page>
