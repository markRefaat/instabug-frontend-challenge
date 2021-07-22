import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("show loading horizontal", () => {
    const loading = true;
    const wrapper = shallowMount(Header, {
      props: { 
        loading: loading,
      },
    });
    const div = wrapper.find('div.horizontal-loading');
    expect(div.exists()).toBe(true);
  });

  it("show loading circular", () => {
    const loading = true;
    const wrapper = shallowMount(Header, {
      props: { loading },
    });
    const div = wrapper.find('div.circular-loading');
    expect(div.exists()).toBe(true);
  });

  it("show input search desktop", async () => {
    const loading = false;
    const wrapper = shallowMount(Header, {
      props: { loading },
    });
    const searchIcon = wrapper.find('#search_desktop_icon');
    await searchIcon.trigger('click')
    const input = wrapper.find("#searchInput");
    expect(input.exists()).toBe(true);
  });

  it("show input search mobile", async () => {
    const loading = false;
    const wrapper = shallowMount(Header, {
      props: { loading },
    });
    const searchIcon = wrapper.find('#search_mobile_icon');
    await searchIcon.trigger('click')
    const input = wrapper.find("#searchInput");
    expect(input.exists()).toBe(true);
  });

  it("input q search", async () => {
    const loading = false;
    const q = "الدحيح";
    const wrapper = shallowMount(Header, {
      props: { loading },
    });
    const searchIcon = wrapper.find('#search_mobile_icon');
    await searchIcon.trigger('click');
    const input = wrapper.find("#searchInput");
    await input.setValue("الدحيح");
    expect(wrapper.emitted("search")[0]).toEqual(["الدحيح"]);
  });
});
