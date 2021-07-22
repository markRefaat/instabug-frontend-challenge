import { shallowMount } from "@vue/test-utils";
import VideoTile from "@/components/VideoTile.vue";

describe("VideoTile.vue", () => {
  it("load video object", () => {
    const VIDEO = {
      id: 123,
      thumbnail: "https://i.pinimg.com/originals/19/db/31/19db31732931019b73bedcf17924f814.jpg",
      title: "test1",
      channelName: "channel name"
    };
    const wrapper = shallowMount(VideoTile, {
      propsData: {
        video: VIDEO,
      }
    });
    expect(wrapper.find('.video-container').element.href).toBe("http://localhost/#/video/"+VIDEO.id);
    expect(wrapper.find('.video-icon').element.src).toBe(VIDEO.thumbnail);
    expect(wrapper.find('.video-title').text()).toBe(VIDEO.title);
    expect(wrapper.find('.video-data').text()).toBe(VIDEO.channelName);
  });
});
