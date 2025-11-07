<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Fieldset;

class ProductForm
{
    // public function titleFields() {
    //     foreach(['ru', 'uk', 'en'] as $locale) {
    //         return TextInput::make('title')->label('Название'),
    //     }
    // }

    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()->schema([
                    Section::make([
                        Fieldset::make('Название')->schema([
                            TextInput::make('title.ru')->label('Название RU'),
                            TextInput::make('title.uk')->label('Название UK'),
                            TextInput::make('title.en')->label('Название EN'),
                        ]),
                        Fieldset::make('Описание')->schema([
                            Textarea::make('desc.ru')->label('Описание RU'),
                            Textarea::make('desc.uk')->label('Описание UK'),
                            Textarea::make('desc.en')->label('Описание EN'),
                        ]),

                        Toggle::make('full_catalog_item')
                            ->label('Продукт во всех товарах')
                            ->helperText('Если включен, отображаем продукт на вкладке со всеми продуктами в каталоге')
                            ->default(true),
                        Select::make('colors')
                            ->label('Доступные цвета')
                            ->multiple()
                            ->relationship('colors', 'title')
                            ->preload()
                            ->searchable()
                            ->getOptionLabelFromRecordUsing( fn($record) =>
                                view('filament.forms.components.color-option', ['color' => $record])->render()
                            )
                            ->allowHtml(),
                        FileUpload::make('thumbnail')
                            ->disk('public')
                            ->label('Картинка продукта')
                            ->image()
                            ->visibility('public')
                            ->directory('uploads')
                    ])->columnSpan(1),
                    Section::make([
                        FileUpload::make('gallery')
                            ->disk('public')
                            ->label('Галерея')
                            ->multiple()
                            ->image()
                            ->directory('galleries')
                            ->visibility('public')
                            ->reorderable()
                            ->panelLayout('grid'),
                        FileUpload::make('blueprints')
                            ->disk('public')
                            ->label('Чертежи')
                            ->multiple()
                            ->image()
                            ->directory('blueprints')
                            ->visibility('public')
                            ->reorderable()
                            ->panelLayout('grid'),
                    ])->columnSpan(1),
                ])->columnSpanFull()->columns(2),
            ]);
    }
}
