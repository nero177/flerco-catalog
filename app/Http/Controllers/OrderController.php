<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\OrderProductInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function create(OrderRequest $request) {
        return DB::transaction(function () use ($request) {
            $order = Order::create([
                'name' => $request->name,
                'contact' => $request->contact,
            ]);

            foreach ($request->products as $productData) {
                $orderProduct = OrderProduct::create([
                    'order_id' => $order->id,
                    'product_id' => $productData['id'],
                ]);

                $productDetails = $productData['details'];
                $orderProductInfo = OrderProductInfo::create([
                    'amount' => $productDetails['amount'] ?? 1,
                    'heat' => $productDetails['heat'] ?? false,
                    'logo' => $productDetails['logo'] ?? false,
                    'wishes' => $productDetails['wishes'] ?? null,
                    'order_product_id' => $orderProduct->id,
                ]);

                $colorIds = array_map(function($item) {
                    return $item['id'];
                }, $productDetails['colors']);

                $orderProductInfo->colors()->attach($colorIds);
            }

            return response()->json([
                'success' => true,
                'message' => 'Order created successfully',
                'order_id' => $order->id
            ]);
        });
    }
}
