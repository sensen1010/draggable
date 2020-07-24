<template>
  <div class="hello">
    字体样式：大小、字体颜色、背景颜色、粗体、斜体、下划线、对齐方式
       <button> 撤销</button>
       <button> 重做</button>
       <button @click="adddragg"> 添加</button>
       <button @click="deletedragg"> 删除</button>
       <button @click="updragg"> 顶层</button>
       <button @click="dedragg"> 底层</button>
       <button @click="updragg"> 上一层</button>
       <button @click="dedragg"> 下一层</button>
       <button @click="dedragg">锁定</button>
    <div style="width:500px;height:500px;background-color: #42b983;">
    <vue-draggable-resizable
       v-for="(item,num) in datalist" 
          :key="num" 
          :x="item.x" 
          :y="item.y" 
          :w="item.width" 
          :h="item.height" 
          :z="item.z"
          @activated="onActivated(item,num)" 
          @deactivated="onDeactivated(item,num)"
          @resizing="onResize(arguments,item)"
          :parent="true" >
          <video  v-if="item.type=='mp4'"  controls="controls" src="https://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v" style="width:100%;height:100%;object-fit: fill" />
          <img  v-if="item.type=='img'"  controls="controls" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594815263697&di=5bb2d9b62db90c3962af776def16644c&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg" style="width:100%;height:100%" />
          <textarea  v-if="item.type=='text'" 
           :style='"background-color:"+item.color+";text-align:"+item.textAlign+";outline:none;border:0;width:100%;resize: none;overflow-y:hidden"' 
           />
    </vue-draggable-resizable>
    <!-- <vue-draggable-resizable :parent="true"  style="background-color: #000;">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594815263697&di=5bb2d9b62db90c3962af776def16644c&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg"
     style="width:100%;height:100%"
    />
    </vue-draggable-resizable>
    <vue-draggable-resizable :parent="true"  :disable-user-select="false"  style="border: 1px solid black;user-select：true;display: flex;flex-direction: column;padding:5px;" :drag-cancel="'.drag-cancel'">
    <textarea  class="drag-cancel" :draggable="false" style="background-color:rgba(0,0,0,0);outline:none;border:0;width:100%;resize: none;overflow-y:hidden"  />
</vue-draggable-resizable> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
      data(){
        return {
            datalist:[
              {
                 id:1,
                 type:'img',
                 x:200,
                 y:50,
                 style:'',
                 width: 100,
                 height: 100,
                 z:3,
              },
              {
                id:2,
                type:'mp4',
                x:20,
                y:50,
                width: 100,
                height: 100,
                z:2
              },
              {
                id:3,
                type:'text',
                x:200,
                y:200,
                width: 100,
                height: 100,
                z:1,
                color:"#FF1493",
                textAlign:"center",
                size:"16px"
              }
            ]
            
        }
    }
    ,methods: {
    onActivated (val,num) {

    },
    onDeactivated (val,num) {
    
    },
     onResize(asd,item) {
         console.log(asd);
         console.log(item);
     },
        deletedragg(){
          
        },
        updragg(){},
        dedragg(){},
        adddragg(){
          const num=this.datalist.length;
          this.datalist.push({
                id:num+1,
                type:'text',
                x:150,
                y:300,
                width: 150,
                height: 100,
                z:num+1,
                color:"#FF1493",
                textAlign:"center",
                size:"16px"
         })
        }
    
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  background-color: #42b983;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
