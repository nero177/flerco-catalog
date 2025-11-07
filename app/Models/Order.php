<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name',
        'contact'
    ];

    public function products() {
        return $this->belongsToMany(Product::class, 'order_product');
    }

    public function orderProducts() {
        return $this->hasMany(OrderProduct::class);
    }

    public function orderProductInfos() {
        return $this->hasManyThrough(OrderProductInfo::class, OrderProduct::class, 'order_id', 'order_product_id');
    }
}
