new Vue({
    el : '#root',
    data : {
        messages : ['red', 'green', 'blue'],
        current_index : 0
    },
    mounted() {
        this.initSlideshow();
    },
    methods : {
        initSlideshow() {
            var self = this;
        },
        move_next() {
            if ( this.current_index < this.messages.length - 1 ) {
                this.current_index++;
            }
        },
        move_prev() {
            if ( this.current_index > 0 ) {
                this.current_index--;
            }
        },
        select(key) {
            this.current_index = key;
        }
    },
    template : `
        <div class="container">
            <div v-for="(msg, key) in messages" :style="{ opacity : (key === current_index) ? 1 : 0 }" class="absolute-container">
    			<div :class="msg">
    				<div class="carousel-caption">
    					<h1>{{ msg }}</h1>
    					<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    					<p><a class="btn btn-lg btn-primary" @click="move_next" role="button">Learn more</a></p>
    				</div>				
    			</div>
    		</div>
    	</div>	

    `
});

