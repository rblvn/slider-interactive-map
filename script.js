jQuery(document).ready(function() {
	let state ={
		currentRegion:"",
	};
	let currentRegSelector = document.querySelector('#countries').value;
	function setCurrentReg (newRegion){
		state.currentRegion = newRegion;
		$(`#countries option[value='${newRegion}']`).prop('selected', true);
		$('#vmap').vectorMap('set','colors',{ru: '#8f8f8f',cn: '#8f8f8f',ca: '#8f8f8f'});
		switch(newRegion) {
			case 'ru':  // if (x === 'value1')
			$('#vmap').vectorMap('set','colors',{ru: '#e6161f'});
				break;
			case 'cn':  // if (x === 'value1')
			$('#vmap').vectorMap('set','colors',{cn: '#e6161f'});
				break;
			case 'ca':  // if (x === 'value1')
			$('#vmap').vectorMap('set','colors',{ca: '#e6161f'});
				break;
			default:
				break;
		}
		}
		
	let slider = document.querySelector('.map__slider');
	
	
	//document.querySelector('#countries').addEventListener('onchange',onChangeSelect)

	jQuery('#vmap').vectorMap({ 
		map: 'world_en' ,
		backgroundColor:'#fff',
		selectedColor:'#e6161f',
		hoverOpacity: 1,
		color:'#8f8f8f',
		pins: { "ru" : "\u003cimg src=\"pin.png\" /\u003e" /*serialized */,
						"ca" : "\u003cimg src=\"pin.png\" /\u003e",
						"cn" : "\u003cimg src=\"pin.png\" /\u003e",

				},
    pinMode: 'content',
		onRegionClick: function(event, code, region){
			event.preventDefault();
		},
	});
	swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	let pins = document.querySelectorAll(".jqvmap-pin");
	pins.forEach((pin) =>{
		pin.addEventListener('mouseover',(e)=>{
			let reg = e.target.parentNode.getAttribute('id').slice(8,10);
			slider.style.display = "block";
			setCurrentReg(reg)
			switch(reg) {
				case 'ru':  // if (x === 'value1')
					swiper.slideTo(0,0,true);
					break;
				case 'cn':  // if (x === 'value1')
					swiper.slideTo(1,0,true);
					break;
				case 'ca':  // if (x === 'value1')
					swiper.slideTo(2,0,true);
					break;
				default:
					break;
			}
		});

		/* pin.addEventListener('click',(e)=>{
			let reg = e.target.parentNode.getAttribute('id').slice(8,10);
			slider.style.display = "block";
			setCurrentReg(reg)
			switch(reg) {
				case 'ru':  // if (x === 'value1')
					swiper.slideTo(0,0,true);
					break;
				case 'cn':  // if (x === 'value1')
					swiper.slideTo(1,0,true);
					break;
				case 'ca':  // if (x === 'value1')
					swiper.slideTo(2,0,true);
					break;
				default:
					break;
			}
		}); */
	});
	swiper.on('slideChange',()=>{
		if (swiper.realIndex==0){
			setCurrentReg('ru');
		} else if (swiper.realIndex==1){
			setCurrentReg('cn');
		}else if (swiper.realIndex==2){
			setCurrentReg('ca');
		}
	})

});
let swiper;
let onChangeSelect = (value) => {
	//let value = e.target.value;
	//console.log(value);
	switch(value) {
		case 'ru':  // if (x === 'value1')
			swiper.slideTo(0,0,true);
			break;
		case 'cn':  // if (x === 'value1')
			swiper.slideTo(1,0,true);
			break;
		case 'ca':  // if (x === 'value1')
			swiper.slideTo(2,0,true);
			break;
		default:
			break;
	}
};