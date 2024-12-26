<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{


    private $products = [
        [
           'id' => 1,
        'name' => 'YONEX',
        'description' => 'Length
10 mm longer

Color(s)
Black / Green
Recommended String
Control Players:
NANOGY 98
Hard Hitters:
NANOGY 95

Flex
Hi-Flex

Frame
HT Graphite

Shaft
Graphite

Weight / Grip
4U5,6

Stringing Advice
4U: 20 – 30 lbs

Made In
China

Item Code
ARC2F',
        'price' => 2580,
        'image' => '/images/1.png'
        ],
        [
            'id' => 2,
            'name' => 'NANOFLARE 700 PRO',
            'description' => 'Latest smartphone with great features',
            'price' => 800,
            'image' => '/images/2.png'
        ],
        [
            'id' => 3,
            'name' => 'ASTROX 88 D PRO',
            'description' => 'Portable tablet for everyday use',
            'price' => 500,
            'image' => '/images/3.png'
        ],
        [
            'id' => 4,
            'name' => 'NANOFLARE 002 FEEL',
            'description' => 'High-performance laptop',
            'price' => 2580,
            'image' => '/images/4.png'
        ],
        [
            'id' => 5,
            'name' => 'NANOFLARE 1000 Z',
            'description' => 'Latest smartphone with great features',
            'price' => 800,
            'image' => '/images/5.png'
        ],
        [
            'id' => 6,
            'name' => 'ASTROX 99 TOUR',
            'description' => 'Portable tablet for everyday use',
            'price' => 500,
            'image' => '/images/6.png'
        ],
        [
            'id' => 7,
            'name' => 'NANOFLARE 001 FEEL',
            'description' => 'High-performance laptop',
            'price' => 2580,
            'image' => '/images/7.png'
        ],
        [
            'id' => 8,
            'name' => 'ARCSABER 2 CLEAR',
            'description' => 'Latest smartphone with great features',
            'price' => 800,
            'image' => '/images/8.png'
        ],
        [
            'id' => 9,
            'name' => 'NANOFLARE 001 CLEAR',
            'description' => 'Portable tablet for everyday use',
            'price' => 500,
            'image' => '/images/9.png'
        ]
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Products/Index', ['products' => $this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */

    public function show($id)
    {
        $product = collect($this->products)->firstWhere('id', $id);
        if (!$product) {
         abort(404, 'Product not found');
        }
        return Inertia::render('Products/Show', ['product' => $product]);
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
