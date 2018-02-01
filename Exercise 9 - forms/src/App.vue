<template>
    <div class="container">
        <form>
            <div class="row" v-if="!showForm">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Exercise 1</h1>
                    <div class="form-group">
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                        <label for="firstName"> First Name: 
                            <input type="text" 
                                    v-model="fullName.firstName"
                                    class="form-control">
                        </label>

                        <label for="lastName"> Last Name: 
                            <input type="text" 
                                    v-model="fullName.lastName"
                                    class="form-control">
                        </label>
                    </div>

                    <div class="form-group">
                        <label for="email">Email
                            <input type="email" 
                                    v-model="email"
                                    class="form-control">
                        </label>
                        <br>
                        <label for="password"> Password
                            <input type="password" 
                                    v-model="password"
                                    class="form-control">
                        </label>
                    </div>

                    <div class="form-group">
                        <label for="yesStore">
                            <input type="radio"
                                    v-model="isStored"
                                    value="Yes"
                                    id="yesStore">
                            Store in Database?
                        </label>
                        <br>
                        <label for="noStore">
                            <input type="radio"
                                    v-model="isStored"
                                    value="No" 
                                    id="noStore">
                            Don't store in Database?
                        </label>
                    </div> 

                    <hr><hr>
                    <h1>Exercise 2</h1>
                    <button class="btn btn-primary"         @click.prevent="showForm=true">
                        Submit
                    </button>
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <hr><hr>
                    
                   <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                   <h1>Exercise 3</h1>
                    <full-name v-model="fullName"></full-name>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="showForm">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName.firstName}}  {{fullName.lastName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{isStored}}</p>
                    </div>
                </div>
                 <button class="btn btn-primary" @click.prevent="showForm=false">
                    Show form
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        components:
        {
            'full-name': FullName
        },
        data: function()
        {
            return {
                fullName: {
                    firstName: '',
                    lastName: '',
                },
                email: '',
                password: '',
                isStored: 'No',
                showForm: false
            }
        }
    }
</script>

<style>
</style>
