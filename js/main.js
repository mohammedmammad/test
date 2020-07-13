new Vue({
    el: '#app' ,
    data:{
        name : 'Eyad',
        counter: 0 ,
        dyId : 'parag' ,
        dyClass: 'text-center',
        dyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        shown: false ,
        list: [
            {name:'hammad' , age:26},
            {name:'Menna' , age:25},
            {name:'Eyad' , age:1}, 
        ],
        dyHtml: `
                <h1 class="text-center">Welcome to My Website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus velit molestiae corrupti amet distinctio ducimus. Cupiditate, placeat enim illum porro tempore ad, voluptatum reprehenderit, excepturi neque saepe dolores vel?</p>
                `
    },
    template: `
        <section>
            <div class='container'>
                <header>
                    Hello Mr.{{name}}
                </header>
                <div class="content">
                    <div v-html="dyHtml"></div>
                    <div v-text="dyText"></div>
                    <div :id="dyId">this is pargraph</div>
                    <div v-bind:class="dyClass">this is text center</div>
                    </br>
                    </br>
                    <div>
                        <button class="btn btn-info" v-on:click="increase()">increase</button>
                        <span>{{counter}}</span>
                        <button class="btn btn-danger" v-on:click="decrease()">decrease</button>
                    </div>
                    </br>
                    </br>
                    <button class="btn btn-info" @click="shown = !shown">Toggle</button>
                    <form v-on:submit.prevent="save">
                        <div :class="[bgred , 'brad' , {dnone: shown}]">
                            <label for="uname">User Name</label>
                            <input type="text" id="uname"/>
                        </div>
                        <div>
                            <button class="btn btn-info" type="submit">Save</button>
                        </div>
                    </form>
                    </br>
                    <input type="text" v-on:keyup.enter="writting()" v-on:keyup.space="spave()"/>
                </div>
                </br>
                </br>
                    <ul>
                        <li v-for="(item , index) in list" :key="index">
                            <span>name is</span>  <span>{{item.name}}</span> ,
                            <span>Age is</span>  <span>{{item.age}}</span>
                        </li>
                    </ul>
                </br>
                </br>
                <footer>
                    Footer
                </footer>
            </div>
        </section>
    `,
    methods:{
        increase(){
            if(this.counter < 10){
                this.counter = this.counter + 1 
            } 
        },
        decrease(){
            if(this.counter > 0){
                this.counter = this.counter - 1 
            } 
        },
        save(){
            alert("saved")
        },
        writting(){
            console.log('writting.....')
        },
        spave(){
            console.log('oooop.....')
        }
    },
    computed:{
        bgred(){
            return 'bgred'
        }
    }
})
