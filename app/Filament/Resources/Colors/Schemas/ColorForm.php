<?php

namespace App\Filament\Resources\Colors\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ColorForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->required()
                    ->disk('public')
                    ->visibility('public')
                    ->directory('colors'),
                TextInput::make('color_hex'),
            ]);
    }
}
