<template>
  <div class="hello">
    字体样式：大小、字体颜色、背景颜色、粗体、斜体、下划线、对齐方式
    <div style="width:500px;height:500px;background-color: #42b983;">
    
    <vue-draggable-resizable
       v-for="item in datalist" 
          :key="item.id" 
          :x="item.x" 
          :y="item.y" 
          :w="item.width" 
          :h="item.height" 
          :z="item.z"
          :parent="true" >
          <video  v-if="item.type=='mp4'"  controls="controls" src="https://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v" style="width:100%;height:100%;object-fit: fill" />
          <img  v-if="item.type=='img'"  controls="controls" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594815263697&di=5bb2d9b62db90c3962af776def16644c&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg" style="width:100%;height:100%" />
          <textarea  v-if="item.type=='text'"  style="background-color:rgba(0,0,0,0);outline:none;border:0;width:100%;resize: none;overflow-y:hidden"  />
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
                 z:2,
              },
              {
                id:3,
                type:'text',
                x:200,
                y:200,
                width: 100,
                height: 100,
                z:1,
                color:"#ffffff",
                textAlign:"center",
                
              }
            ]

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
