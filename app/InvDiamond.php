<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvDiamond extends Model
{
 protected $fillable = [
	'id', 'price', 'stock', 'certificate', 'shape', 'weight', 'color', 'clarity', 'cut', 'polish', 'symmetry', 'fluroscence', 'lab'
	];
   	 public static $filters = [
    	'id', 'price', 'stock', 'certificate', 'shape', 'weight', 'color', 'clarity', 'cut', 'polish', 'symmetry', 'fluroscence', 'lab'
    			];


    	public function invoice()
    	{
    		return $this->hasMany(Invoice::class);
    	}

    	public static function form()
    	{
    		return [
    		// 'id' => '' , 
    		'price' => 0 , 
    		'stock' => '' , 
    		'certificate' => '', 
    		'shape' => 'RD', 
    		'weight' => '', 
    		'color' => '', 
    		'clarity' => '', 
    		'cut' => 'EX', 
    		'polish' => 'EX', 
    		'symmetry' => 'EX', 
    		'fluroscence' => 'NON', 
    		'lab' => 'GIA'
    		];
    	}
}
