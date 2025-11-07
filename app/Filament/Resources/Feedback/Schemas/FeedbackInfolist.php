<?php

namespace App\Filament\Resources\Feedback\Schemas;

use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;

class FeedbackInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextColumn::make('name'),
                TextColumn::make('contact'),
                TextColumn::make('topic'),
                TextColumn::make('message'),
            ]);
    }
}
