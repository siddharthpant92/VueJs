<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <br>
        <p>Name in Parent Component: {{name}}</p>
        <p>User Age: {{userAge}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :username="name" 
                    @nameWasReset="name=$event"
                    :resetFn="resetNameParent"
                    :userAge="userAge">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="userAge"
                    @ageWasEdited="userAge=$event">
                </app-user-edit>
            </div>
        </div>
        <!-- <app-user-detail></app-user-detail> -->
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function()
        {
            return {
                name: "Sid",
                userAge: 25
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods:
        {
            changeName: function()
            {
                this.name = "Pant"
            },
            resetNameParent: function()
            {
                this.name = "Siddha"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
