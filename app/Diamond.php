<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\DataViewer;


class Diamond extends Model
{
    use DataViewer;

    protected $hidden = array('supplier_id', 'stock');

    protected $fillable = [
	'id', 'price', 'stock', 'certificate', 'shape', 'weight', 'color', 'clarity', 'cut', 'polish', 'symmetry', 'fluorescence', 'lab', 'location', 'imageLink'
	];
   	 public static $columns = [
    	       'id',
                'price',
                'shape',
                'weight',
                'color',
                'clarity',
                'cut',
                'polish',
                'symmetry',
                'fluorescence',
                'certificate',
                'lab',
                'stock',
                'location',
                'imageLink'];


    	public function supplier()
    	{
    		return $this->belongsTo(Supplier::class);
    	}

    	public static function form()
    	{
    		return [
    		'id' => '' , 
    		'price' => 0 , 
    		'stock' => '' , 
    		'certificate' => 0, 
    		'shape' => '', 
    		'weight' => 0, 
    		'color' => '', 
    		'clarity' => '', 
    		'cut' => '', 
    		'polish' => '', 
    		'symmetry' => '', 
    		'fluorescence' => '', 
    		'lab' => '', 
    		'location' => '', 
    		'imageLink'
    		];
    	}
}
