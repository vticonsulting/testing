<template>
  <form>
    <fieldset :disabled="false">
      <label class="block mb-6">
        <span>First Name</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Name"
        >
      </label>
      <label class="block mb-6">
        <span>Last Name</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Name"
        >
      </label>
      <label class="block mb-6">
        <span>Email</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Name"
        >
      </label>
      <label class="block mb-6">
        <span>Password</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Name"
        >
      </label>
      <label class="block mb-6">
        <span>Confirm Password</span>
        <input
          class="form-input mt-1 block w-full"
          type="text"
          placeholder="Name"
        >
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Textarea</span>
        <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some long form content." />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Select</span>
        <select class="form-select block w-full mt-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </label>
      <div class="block mb-6">
        <span class="text-gray-700">Checkboxes</span>
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox" checked>
              <span class="ml-2">Option 1</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Option 2</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Option 3</span>
            </label>
          </div>
        </div>
      </div>
      <div class="block mb-6">
        <span class="text-gray-700">Radio Buttons</span>
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio" name="radio" value="1" checked>
              <span class="ml-2">Option 1</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio" name="radio" value="2">
              <span class="ml-2">Option 2</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input type="radio" class="form-radio" name="radio" value="3">
              <span class="ml-2">Option 3</span>
            </label>
          </div>
        </div>
      </div>

      <BaseButton is-small label="dashboard-form" @click.prevent="submit">
        Button
      </BaseButton>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'ProfileForm',
}
</script>
