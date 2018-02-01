<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                	<p v-highlight:background.delayed="'red'">Background color</p>
                	<p v-highlight="'red'">Text color</p>
                	<p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Local directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	directives: 
    	{
    		'local-highlight':
    		{
    			bind(el, binding, vnode)
    			{
    				var delay = 0;
					if(binding.modifiers['delayed'])
					{
						delay = 3000;
					}
					if(binding.modifiers['blink'])
					{
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor
						let currentColor = mainColor;
						setTimeout(() =>
						{
							setInterval(()=>
							{
								if(currentColor == secondColor ? currentColor = mainColor: currentColor = secondColor);
								if(binding.arg == 'background')
								{
									el.style.background = currentColor;
								}
								else
								{
									el.style.color = currentColor;
								}
							}, binding.value.delay);
						}, delay)
					}
					else
					{
						setTimeout(() =>
						{
							if(binding.arg == 'background')
							{
								el.style.background = binding.value.mainColor;
							}
							else
							{
								el.style.color = binding.value.mainColor;
							}
						}, delay)
					}
			    }
    		}
    	}
    }
</script>

<style>

</style>
