import { shallowMount } from "@vue/test-utils";
import Filters from "@/components/Filters.vue";

describe("Filters.vue", () => {
  it("type options mobile", () => {
    const wrapper = shallowMount(Filters, {});
    const option = wrapper.findAll("#type > option")[1];
    option.element.selected = true
    
    expect(wrapper.find('#type > option:checked').element.value).toBe(option.element.value);
  });

  it("uploadDate options mobile", () => {
    const wrapper = shallowMount(Filters, {});
    const option = wrapper.findAll("#uploadDate > option")[1];
    option.element.selected = true
    
    expect(wrapper.find('#uploadDate > option:checked').element.value).toBe(option.element.value);
  });
  
});
