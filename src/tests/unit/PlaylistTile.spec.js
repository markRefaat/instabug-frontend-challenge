import { shallowMount } from "@vue/test-utils";
import PlaylistTile from "@/components/PlaylistTile.vue";

describe("PlaylistTile.vue", () => {
  it("load playlist object", () => {
    const PLAYLIST = {
      id: 123,
      thumbnail: "https://i.pinimg.com/originals/19/db/31/19db31732931019b73bedcf17924f814.jpg",
      title: "test1",
      channelName: "channel name"
    };
    const wrapper = shallowMount(PlaylistTile, {
      propsData: {
        playlist: PLAYLIST,
      }
    });
    expect(wrapper.find('.playlist-container').element.href).toBe("http://localhost/#/video/"+PLAYLIST.id);
    expect(wrapper.find('.playlist-icon').element.src).toBe(PLAYLIST.thumbnail);
    expect(wrapper.find('.playlist-title').text()).toBe(PLAYLIST.title);
    expect(wrapper.find('.playlist-data').text()).toBe(PLAYLIST.channelName);
  });
});
