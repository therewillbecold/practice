<template>
    <div>
        <h3>双向绑定</h3>
        <div>
            <input type="text" v-model="msg">
        </div>
        <div>
            <input type="text" v-model="msg2">
        </div>
        <div>
            输入: <p>{{msg}}</p>
        </div>
        <div>
            2222: {{msg}}
        </div>
        <button @click="clickBtn()">按钮</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: '小姐姐',
            msg2: '222'
        }
    },
    methods: {
        clickBtn () {
            console.log('click:', this);
        }
    },
   
}
</script>

