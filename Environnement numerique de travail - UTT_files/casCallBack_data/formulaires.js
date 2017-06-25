/*
 * Copyright COCKTAIL (www.cocktail.org), 1995, 2012 This software 
 * is governed by the CeCILL license under French law and abiding by the
 * rules of distribution of free software. You can use, modify and/or 
 * redistribute the software under the terms of the CeCILL license as 
 * circulated by CEA, CNRS and INRIA at the following URL 
 * "http://www.cecill.info". 
 * As a counterpart to the access to the source code and rights to copy, modify 
 * and redistribute granted by the license, users are provided only with a 
 * limited warranty and the software's author, the holder of the economic 
 * rights, and the successive licensors have only limited liability. In this 
 * respect, the user's attention is drawn to the risks associated with loading,
 * using, modifying and/or developing or reproducing the software by the user 
 * in light of its specific status of free software, that may mean that it
 * is complicated to manipulate, and that also therefore means that it is 
 * reserved for developers and experienced professionals having in-depth
 * computer knowledge. Users are therefore encouraged to load and test the 
 * software's suitability as regards their requirements in conditions enabling
 * the security of their systems and/or data to be ensured and, more generally, 
 * to use and operate it in the same conditions as regards security. The
 * fact that you are presently reading this means that you have had knowledge 
 * of the CeCILL license and that you accept its terms.
 */

var PADDING_ENTRE_ELEMENTS = 5;

var FORM = {

	aligner: function() {
	    jQuery("form").find("div.formAligner").each(function(){
	    	
	    	var maxLabel = 0;
	    	var maxInput = 0;
	    	var tailleInput = 0;
	    	var nbChampsAvant = 0;
	    	
	    	if(!jQuery(this).hasClass("isAligne")) {
	    		
		    	// Calcul des tailles max
		    	jQuery(this).find("label").each(function(){
		    	
		    		// taile max d'un label
			        if (jQuery(this).width() > maxLabel) {
			        	// on rajoute quelques pixels au cas ou le label contient des espaces (mal gérés par jquery)
			            maxLabel = jQuery(this).width() + 3;
		            } 
		            
		            if(maxLabel > 0) {
		            	
			            var element = jQuery(this);
			            
			            // on reinitialise la taille de l'input
			            tailleInput = 0;
			            nbChampsAvant = 0;
			            
			            // taille max d'un input ou select ou hyperlien
			            while(element.next('select').length > 0 || element.next('input').length > 0 || element.next('a').length > 0) {
			            	if(element.next('select').length > 0) {
			            	
			            		tailleInput += element.next('select').outerWidth(true);
			            		element = element.next('select');
			            		
			            		//si un select est directement suivi d'un autre champ
				            	if(element.next('select').length > 0) {
				            		nbChampsAvant ++;
				            		element.addClass("suiviParUnChamp");
				            		element.removeClass("precedeDUnChamp");
				            		element.next('select').addClass("precedeDUnChamp");
				            		
				            	} else if(element.next('input').length > 0) {
				            		nbChampsAvant ++;
				            		element.addClass("suiviParUnChamp");
				            		element.removeClass("precedeDUnChamp");
				            		element.next('input').addClass("precedeDUnChamp");
				            		
				            	} else if(element.next('a').length > 0) {
				            		nbChampsAvant ++;
				            		element.addClass("suiviParUnChamp");
				            		element.removeClass("precedeDUnChamp");
				            		element.next('a').addClass("precedeDUnChamp");
				            		
				            	} else {
				            		if(element.hasClass('precedeDUnChamp')) {
				            			element.data('tailleInput', tailleInput);
				            			element.data('nbChamps', nbChampsAvant);
				            		}
				            		
				            		if(tailleInput > maxInput) {
				            			maxInput = tailleInput;
				            		}
				            	}
			            	} else if(element.next('input').length > 0) {
			            	
			            		tailleInput += element.next('input').outerWidth(true);
			            		element = element.next('input');
			            		
			            		// si un input est directement suivi d'un autre champ
				            	if(element.next('input').length > 0) {
				            		nbChampsAvant ++;
				            		element.addClass("suiviParUnChamp");
				            		element.removeClass("precedeDUnChamp");
				            		element.next('input').addClass("precedeDUnChamp");
				            		
				            	}else if(element.next('select').length > 0) {
				            		nbChampsAvant ++;
				            		element.addClass("suiviParUnChamp");
				            		element.removeClass("precedeDUnChamp");
				            		element.next('select').addClass("precedeDUnChamp");
				            		
				            	} else if(element.next('a').length > 0) {
				            		nbChampsAvant ++;
				            		element.addClass("suiviParUnChamp");
				            		element.removeClass("precedeDUnChamp");
				            		element.next('a').addClass("precedeDUnChamp");
				            		
				            	} else {
				            		if(element.hasClass('precedeDUnChamp')) {
				            			element.data('tailleInput', tailleInput);
				            			element.data('nbChamps', nbChampsAvant);
				            		}
				            	
				            		if(tailleInput > maxInput) {
				            			maxInput = tailleInput;
				            		}
				            	}
			            	} else if(element.next('a').length > 0){
			            	
			            		tailleInput += element.next('a').width() ;
			            		element = element.next('a');
			            		
			            		if(element.hasClass('precedeDUnChamp')) {
			            			element.data('tailleInput', tailleInput);
			            			element.data('nbChamps', nbChampsAvant);
			            		}
			            	
			            		if(tailleInput > maxInput) {
			            			maxInput = tailleInput;
			            		}
			            	}
			            }
		            }
		            
		        });
		        
		        if(maxLabel > 0) {
		        
		        	jQuery(this).addClass("isAligne");
		        	var widthPage = jQuery(window).width();
		        
			        // on fixe la nouvelle taille pour tous les labels du formulaire
			        jQuery(this).find("label").width(maxLabel);
			        
			        // on rajoute des marges a droite aux champs afin d'aligner le formulaire
			        jQuery(this).find("input").each(function() {
			        	if(jQuery(this).outerWidth(true) < maxInput) {
			        		jQuery(this).css("margin-right", maxInput-jQuery(this).outerWidth()-parseInt(jQuery(this).css('margin-left').replace(/[^-\d\.]/g, '')));
			        	}
			        });
			        
			        jQuery(this).find("select").each(function() {
			        	if(jQuery(this).outerWidth(true) < maxInput) {
			        		jQuery(this).css("margin-right", maxInput-jQuery(this).outerWidth()-parseInt(jQuery(this).css('margin-left').replace(/[^-\d\.]/g, '')));
			        	}
			        });
			        
			        /*jQuery(this).find("a").each(function() {
			        	if(jQuery(this).outerWidth(true) < maxInput) {
			        		jQuery(this).css("margin-right", maxInput-jQuery(this).outerWidth()-parseInt(jQuery(this).css('margin-left').replace(/[^-\d\.]/g, '')));
			        	}
			        });*/
			        
			        // Pas de marge a droite si le champ est suivi par un autre champ
			        jQuery(this).find("input.suiviParUnChamp").each(function() {
			        	jQuery(this).css("margin-right", "");
			        	jQuery(this).removeClass("suiviParUnChamp");
			        });
			        
			        jQuery(this).find("select.suiviParUnChamp").each(function() {
			        	jQuery(this).css("margin-right", "");
			        	jQuery(this).removeClass("suiviParUnChamp");
			        });
			        
			        /*jQuery(this).find("a.suiviParUnChamp").each(function() {
			        	jQuery(this).removeClass("suiviParUnChamp");
			        });*/
			        
			        // Cas du dernier champ ds une suite de champs
			        jQuery(this).find("input.precedeDUnChamp").each(function() {
			        	jQuery(this).removeClass("precedeDUnChamp");		        	
			        	jQuery(this).css("margin-right", maxInput-(jQuery(this).data('tailleInput')-(jQuery(this).data('nbChamps')-1)));
			        });
			        
			        jQuery(this).find("select.precedeDUnChamp").each(function() {
			        	jQuery(this).removeClass("precedeDUnChamp");
			        	jQuery(this).css("margin-right", maxInput-(jQuery(this).data('tailleInput')-(jQuery(this).data('nbChamps')-1)));
			        });
			        
			        jQuery(this).find("a.precedeDUnChamp").each(function() {
			        	jQuery(this).removeClass("precedeDUnChamp");
			        	jQuery(this).css("margin-right", maxInput-(jQuery(this).data('tailleInput')-(jQuery(this).data('nbChamps')-1)));
			        });
			        
			        // si on a demandé à centrer le formulaire
			        jQuery(this).parent().find("div.formCentrer").each(function(){
			        	
			        	var max = 0;
			        	var cptNbLabelMax = 0;
			        	
			        	// calcule le nombre maximal de label par ligne (et donc aussi d'input)
			        	jQuery(this).find("div").each(function(){
			        	
							var nb = jQuery(this).children("label").size();
							if(cptNbLabelMax < nb) {
								cptNbLabelMax = nb;
							}
				        	
			        	});
			        	
			        	// variable contenant la somme des margin left et right
			        	var marginLabel = parseInt(jQuery(this).find("label").css('margin-left').replace(/[^-\d\.]/g, '')) + parseInt(jQuery(this).find("label").css('margin-right').replace(/[^-\d\.]/g, ''));
			        	
			        	max += cptNbLabelMax * (maxLabel + marginLabel) + cptNbLabelMax * maxInput;
			        	
			        	// on rajoute les espaces entre les elements
			        	max += ((cptNbLabelMax * 2) -1) * PADDING_ENTRE_ELEMENTS;
			        	
			        	// on verifie que la taille max est inférieure à la largeur de l'ecran
			        	if(max > widthPage) {
			        		var widthLabelInput = maxLabel + marginLabel + maxInput + 2 * PADDING_ENTRE_ELEMENTS;
			        		jQuery(this).css("width", widthLabelInput * Math.floor(widthPage / widthLabelInput));
			        	} else {		        	
			        		jQuery(this).css("width", max);
			        	}
			        
			        });
			        //cas ou le script n'est pas lancé (bug aléatoire lors de la réouverture de cktlAjaxWindow)
		        } else {
		        	jQuery(this).find("label").width(100);
		        }
	        
	        }
	        
	    });
    
    }
    
}
