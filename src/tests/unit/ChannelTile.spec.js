import { shallowMount } from "@vue/test-utils";
import ChannelTile from "@/components/ChannelTile.vue";

describe("ChannelTile.vue", () => {
  it("load channel object", () => {
    const CHANNEL = {
      id: 123,
      thumbnail: "https://i.pinimg.com/originals/19/db/31/19db31732931019b73bedcf17924f814.jpg",
      title: "test1",
    };
    const wrapper = shallowMount(ChannelTile, {
      propsData: {
        channel: CHANNEL,
      }
    });
    expect(wrapper.find('.channel-container').element.href).toBe("http://localhost/#/channel/"+CHANNEL.id);
    expect(wrapper.find('.channel-icon').element.src).toBe(CHANNEL.thumbnail);
    expect(wrapper.find('.channel-title').text()).toBe(CHANNEL.title);
  });
});
