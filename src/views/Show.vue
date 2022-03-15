<template>
  <div class="contents">

  <Home>
    <template v-slot:content>
      <font>{{cursos.nome}}</font>
            <div class="row row-cols-1 row-cols-md-3 g-4" >
               <div class="col"  v-for="(aluno, i) in alunos" :key="i" >
                  <div class="card">
              <a href="#"><div class="card-header"><h3>{{aluno.id}}</h3></div></a>
              <div class="card-body">
                <table>
                  <tr>
                    <th><font class="card-title">Nome </font></th>
                    <th>:</th>
                    <th><font>{{aluno.nome_completo}}</font></th>
                  </tr>
                  <tr>
                    <th><font class="card-title">Email </font></th>
                    <th>:</th>
                    <th><font class="font-email">{{aluno.email}}</font></th>
                  </tr>
                  <tr>
                    <th><font class="card-title">Endereço</font></th>
                    <th>:</th>
                    <th><font>rua {{aluno.endereço.rua}}, Nº {{aluno.endereço.numero}} - {{aluno.endereço.cidade}}</font></th>
                  </tr>
                    <tr>
                    <th><font class="card-title">Curso </font></th>
                    <th>:</th>
                    <div v-for="(curso, i) in cursos" :key="i" >
                      <th class="font-curso" v-if="(aluno.curso === curso.id)"><font>{{curso.nome}}</font></th>
                    </div>
                  </tr>
                  <tr>
                    <th><font class="card-title">Disciplinas</font></th> 
                    <th>:</th>
                    <th><font>{{aluno.disciplinas[0]}}, {{aluno.disciplinas[1]}}, {{aluno.disciplinas[2]}}</font></th>
                  </tr>
                </table>
              </div>
            </div>
           </div>
          </div>
          </template>
        </Home>
  </div>

 
</template>
<script>
import Home from './Home.vue'
import api from "../services/config"
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: 'Show',
  components:{
        Home,
  },
  setup(){
    
    var alunos = ref([]);
    var cursos = ref([]);
    var fetchAlunos = () =>
      api
        .get("/alunos")
        .then((response) => (alunos.value = 
        response.data));
    var fetchCursos = () =>
      api
        .get("/cursos")
        .then((response) => (cursos.value = 
        response.data));
    onMounted(fetchCursos); 
    onMounted(fetchAlunos);
    return {alunos,cursos};
  },
})
</script>
<style src="./styleViews.css" scoped/>
