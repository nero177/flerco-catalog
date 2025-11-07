<?php

namespace App\Filament\Resources\Orders\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class OrderInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Order Information')
                    ->schema([
                        TextEntry::make('name')
                            ->label('Customer Name'),
                        TextEntry::make('contact')
                            ->label('Contact Information'),
                        TextEntry::make('created_at')
                            ->label('Order Date')
                            ->dateTime()
                            ->placeholder('-'),
                        TextEntry::make('updated_at')
                            ->label('Last Updated')
                            ->dateTime()
                            ->placeholder('-'),
                    ]),

                Section::make('Products')
                    ->schema([
                        RepeatableEntry::make('orderProductInfos')
                            ->schema([
                                ImageEntry::make('orderProduct.product.thumbnail')
                                    ->label('Фото')
                                    ->disk('public')
                                    ->defaultImageUrl('/images/placeholder-product.png'),
                                TextEntry::make('orderProduct.product.title.ru')
                                    ->label('Позиция')
                                    ->html()
                                    ->formatStateUsing(function ($state, $record) {
                                        $product = $record->orderProduct->product ?? null;
                                        if ($product && isset($product['title'])) {
                                            if (is_array($product['title'])) {
                                                return $product['title']['ru'] ?? $product['title']['en'] ?? $product['title']['uk'] ?? 'Unknown Product';
                                            }
                                            return $product['title'];
                                        }
                                        return 'Unknown Product';
                                    }),
                                TextEntry::make('amount')
                                    ->label('Кол-во')
                                    ->badge(),
                                TextEntry::make('heat')
                                    ->label('Подогрев')
                                    ->formatStateUsing(fn($state) => $state ? 'Yes' : 'No')
                                    ->badge()
                                    ->color(fn($state) => $state ? 'success' : 'gray'),
                                TextEntry::make('logo')
                                    ->label('Лого')
                                    ->formatStateUsing(fn($state) => $state ? 'Yes' : 'No')
                                    ->badge()
                                    ->color(fn($state) => $state ? 'success' : 'gray'),
                                TextEntry::make('wishes')
                                    ->label('Пожелания')
                                    ->placeholder('No special wishes')
                                    ->limit(50),
                                RepeatableEntry::make('colors')->label('Выбранные цвета')->schema([
                                    ImageEntry::make('image')
                                        ->disk('public')
                                        ->imageWidth(80)
                                        ->imageHeight(30)
                                        ->columnSpanFull()
                                ]),
                            ])
                            ->columns(4)
                            ->placeholder('No products in this order'),
                    ])
                    ->collapsible()
                    ->collapsed(false),
            ]);
    }
}
