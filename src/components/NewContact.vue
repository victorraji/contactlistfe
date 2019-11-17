<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="5"
        label="NEW CONTACT"
        label-size="lg"
        label-class="font-weight-bold pt-3"
        class="mb-0"
        right
      >
        <b-form-group label-cols-sm="4" label="First name:" label-align-sm="left">
          <b-form-input v-model="first_name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Last name:"
          label-align-sm="left"
          label-for="nested-city"
        >
          <b-form-input align-sm="left" v-model="last_name"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Phone number(s):"
          label-align-sm="left"
          label-for="nested-state"
        >
          <div v-for="(phone_number,index) in phone_numbers" :key="index">
            <b-form-input v-model="phone_number.value"></b-form-input>
          </div>
          <div class="add-button">
            <b-button @click="add_phonenumber">Add Another Phonenumber</b-button>
          </div>
        </b-form-group>

        <b-form-group
          label-cols-sm="4"
          label="Email:"
          label-align-sm="left"
          label-for="nested-country"
        >
          <b-form-input left v-model="email"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label="Address:" label-align-sm="left">
          <b-form-input left v-model="address"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label="Avatar / Image Upload:" label-align-sm="left">
          <b-form-file
            v-model="avatar"
            :state="Boolean(avatar)"
            placeholder="Choose an image or drop it here..."
            drop-placeholder="Drop file here..."
            id="files"
          ></b-form-file>
        </b-form-group>
        <div class="mt-3">Selected image: {{ avatar ? avatar.name : '' }}</div>
      </b-form-group>
      <b-button @click.prevent="new_contact()" type="submit" variant="primary">Save Contact</b-button>
    </b-card>
    <div>
      <b-alert v-show="added_contact" show variant="success">
        <h4 class="alert-heading">Well done!</h4>
        <p>You've succesfully added a new Contact!!</p>
        <hr />
        <p class="mb-0">Redirecting to contacts page</p>
      </b-alert>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import axios from "axios";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_numbers: [{ value: "" }],
      address: "",
      avatar: null,
      added_contact: false
    };
  },
  methods: {
    add_phonenumber() {
      this.phone_numbers.push({ value: "" });
    },
    new_contact: async function() {
      const vm = this;
      console.log(vm.first_name);
      console.log(vm.last_name);
      console.log(vm.email);
      console.log(vm.address);
      var phonenumbers = [];
      this.phone_numbers.forEach(function(phone_number) {
        phonenumbers.push(phone_number.value);
      });
      console.log(phonenumbers);
      console.log(vm.avatar);
      try {
        let response = await axios.post(
          this.$baseUrl + "/api/v1/contacts",
          {
            first_name: vm.first_name,
            last_name: vm.last_name,
            email: vm.email,
            address: vm.address,
            avatar: "",
            phone_number: phonenumbers
          },
          {}
        );
        this.added_contact = true;
        console.log(response);
        this.$router.push({ path: "/Contacts" });
      } catch (error) {
        return error, console.log(error.response);
      }
    }
  }

  //  beforeMount() {
  //  const vm=this;
  //   axios
  //     .get(
  //       this.$baseUrl+'/api/v1/customers/'+vm.user_id+'?include=profile',
  //       { data: {} },
  //       { headers: { 'Content-Type': 'application/json' } }
  //     )
  //     .then(response => {
  //       console.log(JSON.stringify(response))
  //     this.username = response.data.data.name
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
};
</script>
<style scoped>
.add-button {
  padding-top: 10px;
  /* background-color:lightcoral */
}
</style>
