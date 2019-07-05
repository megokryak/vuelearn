<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1> {{ title }}</h1>
          <div class="message" v-if="message">
            <p>{{ message }}</p>
          </div>
          <div class="new-note">
            <input v-model="note.title" type="text">
            <textarea v-model="note.descr"></textarea>
            <button @click ="addNote">Add note</button>
          </div>
          <!-- notes list -->
          <div class="notes">
            <div class="note" v-for="(note, index) in notes" :key="index">
              <div class="note-header">
                <p>{{ note.title }}</p>
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>
</style>
