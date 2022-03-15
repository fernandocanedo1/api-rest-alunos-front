<template>
  <div class="contents">
    <Home>
      <template v-slot:content>
        
                <div class="row g-3 align-items-center">
                  <form id="cadastro" @submit.prevent="editAluno">  
                  <table>
                  <div class="col-auto">
                    <tr><th><label for="texto" class="col-form-label">Nome</label></th>
                    <th><input type="text" id="texto" class="form-control" aria-describedby="textHelpInline" v-model="alunoEdit.nome_completo"></th>
          
                    <th><label for="texto" class="col-form-label">Email</label></th>
                    <th><input type="text" id="texto" class="form-control" aria-describedby="textHelpInline" v-model="alunoEdit.email"></th>

                    <th><label for="texto" class="col-form-label">Rua</label></th>
                    <th><input type="text" id="texto" class="form-control" aria-describedby="textHelpInline" v-model="alunoEdit.endereço.rua"></th>

                    <th><label for="texto" class="col-form-label">Nº</label></th>
                    <th><input type="text" id="texto" class="form-control" aria-describedby="textHelpInline" v-model="alunoEdit.endereço.numero"></th>

                    <th><label for="texto" class="col-form-label">Cidade</label></th>
                    <th><input type="text" id="texto" class="form-control" aria-describedby="textHelpInline" v-model="alunoEdit.endereço.cidade"></th>

                    <th><label for="texto" class="col-form-label">Curso</label></th>
                    <th><input type="text" id="texto" class="form-control" aria-describedby="textHelpInline" v-model="alunoEdit.curso"></th>
                   <th><input type="submit"  value="Submeter" class="btn btn-primary"></th></tr>
                  </div>

                  </table>
                  </form>
                </div>
        <br>
          
        <table class="table">
          <caption>
            Lista de Alunos
          </caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Endereço</th>
              <th scope="col">Curso</th>
              <th scope="col">Disciplinas</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(aluno, i) in alunos" :key="i">
              <th scope="row">{{ aluno.id }}</th>
              <td>{{ aluno.nome_completo }}</td>
              <td>{{ aluno.email }}</td>
              <td>
                rua {{ aluno.endereço.rua }}, Nº {{ aluno.endereço.numero }} -
                {{ aluno.endereço.cidade }}
              </td>
              <td>{{ aluno.curso }}</td>
              <td>
                {{ aluno.disciplinas[0] }}, {{ aluno.disciplinas[1] }},
                {{ aluno.disciplinas[2] }}
              </td>
              <td>
              <li class="list-inline-item">
                <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" @click="edit(aluno)"><font-awesome-icon icon="fas fa-edit" />Editar</button>
              </li></td>
              <td>
              <li class="list-inline-item">
                <form id="cadastro" @submit.prevent="deleteAluno(aluno.id)">
                         
                <button class="btn btn-danger btn-sm rounded-0" type="submit" data-toggle="tooltip" data-placement="top" title="Delete" @submit.prevent="deleteAluno(aluno.id)"><font-awesome-icon icon="fa-solid fa-trash" />Deletar</button>
                        
                </form> </li>
                
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </Home>
  </div>
</template>
<script>
import Home from "./Home.vue";
import api from "../services/config";
import { defineComponent, onMounted, ref } from "vue";
import 'bootstrap/dist/css/bootstrap.css'
const axios = require('axios');
export default defineComponent({
  name: "Edit",
  components: {
    Home,
  },
  data(){
        return{
            alunoEdit:{
                nome:'',
                email:'',
                endereço:'',
                curso:'',
                disciplina:''
            },
        }
    },
  setup() {
    var alunos = ref([]);
    var cursos = ref([]);
    var fetchAlunos = () =>
      api.get("/alunos").then((response) => (alunos.value = response.data));
    var fetchCursos = () =>
      api.get("/cursos").then((response) => (cursos.value = response.data));
    onMounted(fetchCursos);
    onMounted(fetchAlunos);

    return { alunos, cursos };
  },
  methods:{
        async edit(alunoEdit){
            this.alunoEdit=alunoEdit;
        },
        async editAluno(){
          if(await axios.put('http://localhost:3000/alunos/'+this.alunoEdit.id,this.alunoEdit)){
            alert("Aluno "+this.alunoEdit.id+ " editado com sucesso!")
            document.location.reload(true);
          }
        },
        async deleteAluno(id){
          console.log(id)
            if(await axios.delete('http://localhost:3000/alunos/'+id,this.alunoEdit)){
              alert("Aluno "+id+ " deletado com sucesso!")
              document.location.reload(true);
            }
        },
    },
});
</script>
<style src="./styleViews.css" scoped/>
