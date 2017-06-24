<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Form{
    private $action;
    private $methode;
    private $inputs;
    
    function __construct($action,$methode,$inputs) {
        $this->setAction($action);
        $this->setMethode($methode);
        $this->setInputs($inputs);
    }
    
    function setAction($a){
        $this->action = $a;
    }
    
    function setMethode($m){
        $this->methode = $m;
        
    }
    
    function setInputs($i){
        $this->inputs = $i;
    }
    
    
    function build(){
        echo " <form class='form-horizontal'>
  <div class='form-group'>
    <label class='control-label col-sm-2' for='email'>Email:</label>
    <div class='col-sm-10'>
      <input type='email' class='form-control' id='email' placeholder='Enter email'>
    </div>
  </div>

  <div class='form-group'>
    <div class='col-sm-offset-2 col-sm-10'>
      <button type='submit' class='btn btn-default'>Submit</button>
    </div>
  </div>
</form> ";
    }
}