<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h3>Exercise 1</h3>
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>Without filter : {{text}}</p>
                <p>With local filter: {{text | reverse}}</p>

                <hr>

                <h3>Exercise 2</h3>
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>Without filter : {{text}}</p>
                <p>With global filter: {{text}} ({{text | string-length}})</p>
                
                <hr>

                <h3>Exercise 3</h3>
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>Without filter : {{text}}</p>
                <p>With local filter as computed property instead : {{reverseString}}</p>
                <p>With global filter as computed property instead : {{text}} ({{lengthString}})</p>

                <hr>
                
                <h3>Exercise 4</h3>
                <b>Note: I've kept exercise 3 and 4 separately, so there is duplication with respect to that</b><br><br>
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>Without filter : {{textMixin}}</p>
                <p>With local filter as computed property <b>from mixin</b> instead : {{reverseStringMixin}}</p>
                <p>With global filter as computed property <b>from mixin</b> instead : {{textMixin}} ({{lengthStringMixin}})</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {stringMixin} from './stringMixin.js'

    export default {
        mixins: [stringMixin],
        data()
        {
            return{
                text: "Hello World!"
            }
        },
        filters:
        {
            reverse(value)
            {
                return value.split("").reverse().join("");
            }
        },
        computed:
        {
            reverseString()
            {
                return this.text.split("").reverse().join("");
            },
            lengthString()
            {
                return this.text.length;
            }
        }
    }
</script>

<style>
</style>
