<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderProductInfo extends Model
{
    protected $table = 'order_product_info';
    
    protected $fillable = [
        'amount',
        'heat',
        'logo',
        'wishes',
        'color_id',
        'order_product_id'
    ];

    public function colors() {
        return $this->belongsToMany(Color::class, 'order_product_info_colors');
    }

    public function orderProduct() {
        return $this->belongsTo(OrderProduct::class);
    }
}
