
<template>
  <div>
    <div class="pad-card">
      <b-button @click.prevent="toggler()" v-show="!details">SHOW CONTACT INFORMATION</b-button>
      <b-button @click.prevent="toggler()" v-show="details">HIDE CONTACT INFORMATION</b-button>
    </div>
    <div class="container">
      <div v-for="(contact,index) in contacts" :key="index">
        <div>
          <b-card
            :title="contact.first_name + space +  contact.last_name "
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            tag="article"
            style="max-width: 300px;"
            class="mb-2"
          >
            <div>
              <b-card-text class="details-container" v-show="details">
                <div class="phonetext colortext">Phone(s) :</div>
                <div class="phone">
                  <div
                    class="phone-container"
                    v-for="(number,index) in contact.phone_number"
                    :key="index"
                  >
                    <div>{{number}}</div>
                  </div>
                </div>
                <div class="addresstext colortext">Address :</div>
                <div class="address">{{contact.address}}</div>
                <div class="Emailtext colortext">Email :</div>
                <div class="email">{{contact.email}}</div>
              </b-card-text>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
export default {
  name: "Contacts",
  data() {
    return {
      space: "  ",
      contacts: [],
      details: false
    };
  },
  beforeMount() {
    let query = this.$route.params.query;
    axios
      .get(
        this.$baseUrl + "/api/v1/search/" + query,
        { data: {} },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(response => {
        console.log(JSON.stringify(response));
        let jscontacts = response.data.data;
        this.contacts = jscontacts;
        if (this.contacts.length === 0) {
          setTimeout(
            () => this.$router.push({ path: "/SearchContactEmpty" }),
            5000
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    toggler() {
      this.details = !this.details;
    }
  },
  props: {
    msg: String
  }
};
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.phone-container {
  display: flex;
  justify-content: space-between;
}
.colortext {
  color: blueviolet;
}
.email {
  grid-column: 2/4;
  grid-row: 3;
}
.address {
  grid-column: 2/4;
  grid-row: 2;
}
.emailtext {
  grid-column: 1;
  grid-row: 3;
}
.addresstext {
  grid-column: 1;
  grid-row: 2;
}
.phonetext {
  grid-column: 1;
  grid-row: 1;
}
.phone {
  grid-column: 2 / 4;
  grid-row: 1/2;
}
.details-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: Auto 1fr 1fr; */
  grid-auto-rows: minmax(20px, auto);
  grid-gap: 5px;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  /* align-items: center; */
}
.pad-card {
  padding-bottom: 20px;
}
.content-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
