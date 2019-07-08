<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1> {{ title }}</h1>
          <message v-if="message" :message="message"></message>  <!--если мы хотим передать из date значение message, то необходимо байнить (:) -->
          <newNote
            :note="note"
            v-on:addNoteFromChild="addNote"
          />
          <!-- notes list -->
          <notes
          :notes="notes"
          v-on:remove="removeNote"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue';
import newNote from '@/components/NewNode.vue';
import notes from '@/components/Notes.vue';
export default {
  components: {
    message, newNote, notes
  },
  data () {
    return {
      title: 'Notes app',
      message: null,
      note: {
        title: '',
        descr: ''
      },
      notes: [
        {
          title: 'First note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second note',
          descr: 'Description for second note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third note',
          descr: 'Description for third note',
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    addNote () {
      // console.log(this.note)
      let {title, descr} = this.note;
      if(title === "") {
        this.message = "Error. Title is empty";
        return false;
      };
      this.notes.push({
        title: title, //если ключ и значение совпадают то запись можно сократить до title
        descr: descr,
        date: new Date(Date.now()).toLocaleString()
      });
      this.message = null;
      this.note.title ='';
      this.note.descr = '';
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  }
};
</script>
