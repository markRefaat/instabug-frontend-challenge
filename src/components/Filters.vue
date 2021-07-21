<template>
    <div id="desktop">
        <button @click="slide">Filters</button>
        <div id="filters" class="filters hide">
            <div>
                UPLOAD DATE
                <hr />
                <span @click="changeUploadDate" class="upload-date">Last Hour</span>
                <span @click="changeUploadDate" class="upload-date">Today</span>
                <span @click="changeUploadDate" class="upload-date">This Week</span>
                <span @click="changeUploadDate" class="upload-date">This Month</span>
            </div>
            <div>
                TYPE
                <hr />
                <span @click="changeType" class="type">Video</span>
                <span @click="changeType" class="type">Channel</span>
                <span @click="changeType" class="type">Playlist</span>
            </div>
            <div>
                SORT BY
                <hr />
                <span @click="changeSortBy" class="sort-by selected">Relevance</span>
                <span @click="changeSortBy" class="sort-by">Upload Date</span>
                <span @click="changeSortBy" class="sort-by">View Count</span>
                <span @click="changeSortBy" class="sort-by">Rating</span>
            </div>
        </div>
    </div>
    <div id="mobile">
        <div class="dropdown">
            <select class="dropbtn" id="type" @change="changeTypeMobile" >
                <option value="video%2Cchannel%2Cplaylist" selected>All</option>
                <option value="playlist">Playlist</option>
                <option value="channel">Channel</option>
            </select>
        </div>
         <div class="dropdown">
            <select class="dropbtn" id="uploadDate" @change="changeUploadDateMobile" >
                <option value="any" selected>Any Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This month</option>
            </select>
        </div>
    </div>
</template>


<script>
export default {
    name: "Filters",
    data() {
        return {
            uploadDate: "",
            type: "video%2Cchannel%2Cplaylist",
            sortBy: "relevance",
        }
    },
    methods: {
        changeUploadDateMobile() {
            let upldate = document.getElementById("uploadDate").value;
            if(upldate == "any")
                this.uploadDate = "";
            else
            {
                let backHours = 0;
                if(upldate == "today")          
                backHours = 1000 * 60 * 60 * 24;
                else if(upldate == "week")
                backHours = 1000 * 60 * 60 * 24 * 7;
                else if(upldate == "month")
                backHours = 1000 * 60 * 60 * 24 * 7 * 30;
                
                var time = new Date().getTime();
                var date = new Date(time - backHours).toISOString().replaceAll(":","%3A");
                this.uploadDate = date.toString();
            }
        },
        changeUploadDate(e) {
            let alreadySelected = e.target.classList.contains("selected");
            let uploadDateElements = document.getElementsByClassName("upload-date");
            for (var i = 0; i < uploadDateElements.length; ++i) {
                uploadDateElements[i].classList.remove("selected");  
            }
            if(alreadySelected)
            {
                e.target.classList.remove("selected");
                this.uploadDate = "";
            }
            else
            {
                e.target.classList.add("selected");
                let backHours = 0;
                if(e.target.innerText == "Last Hour")
                backHours = 1000 * 60 * 60;
                else if(e.target.innerText == "Today")          
                backHours = 1000 * 60 * 60 * 24;
                else if(e.target.innerText == "This Week")
                backHours = 1000 * 60 * 60 * 24 * 7;
                else if(e.target.innerText == "This Month")
                backHours = 1000 * 60 * 60 * 24 * 7 * 30;
                
                var time = new Date().getTime();
                var date = new Date(time - backHours).toISOString().replaceAll(":","%3A");
                this.uploadDate = date.toString();
            }
        },
        changeTypeMobile() {
            this.type = document.getElementById("type").value;
        },
        changeType(e) {
            let alreadySelected = e.target.classList.contains("selected");
            let uploadDateElements = document.getElementsByClassName("type");
            for (var i = 0; i < uploadDateElements.length; ++i) {
                uploadDateElements[i].classList.remove("selected");  
            }
            if(alreadySelected)
            {
                e.target.classList.remove("selected");
                this.type = "video%2Cchannel%2Cplaylist";
            }
            else
            {
                e.target.classList.add("selected");
                if(e.target.innerText == "Video")
                this.type = "video";
                else if(e.target.innerText == "Channel")          
                this.type = "channel";
                else if(e.target.innerText == "Playlist")
                this.type = "playlist";
            }
        },
        changeSortBy(e) {
            let alreadySelected = e.target.classList.contains("selected");
            let uploadDateElements = document.getElementsByClassName("sort-by");
            for (var i = 0; i < uploadDateElements.length; ++i) {
                uploadDateElements[i].classList.remove("selected");  
            }
            if(alreadySelected)
            {
                e.target.classList.remove("selected");
                this.sortBy = "relevance";
            }
            else
            {
                e.target.classList.add("selected");
                if(e.target.innerText == "Relevance")
                this.sortBy = "relevance";
                else if(e.target.innerText == "Upload Date")          
                this.sortBy = "date";
                else if(e.target.innerText == "View Count")
                this.sortBy = "viewCount";
                else if(e.target.innerText == "Rating")
                this.sortBy = "rating";
            }
        },
        slide() {
            let box = document.getElementById("filters");
            box.classList.toggle('hide');
        },
    },
    watch: {
        "uploadDate": function(value) {
            this.$emit('uploadDate', value);
        },
        "type": function(value) {
            this.$emit('type', value);
        },
        "sortBy": function(value) {
            this.$emit('sortBy', value);
        },
    }
}
</script>

<style scoped>
#desktop{
    display: none;
}
button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
}
.filters > div > span {
  display: block;
  color: grey;
  padding-top: 10px;
}
.filters {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin: 0 auto;
  transition: all 0.4s ease-in-out;
}
.hide {
  height: 0;
}
.selected {
  font-weight: bold;
  color:black !important;
}
.selected::after {
  content: "x";
  padding-left: 10px;
}


.dropbtn {
  background-color: #E8E5DE;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 5px;
  margin-top: 10px;
  margin-left: 16px;
  font-size: 16px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.show {display:block;}

@media (min-width: 992px) {
    #desktop {
        display: block;
    }
    #mobile {
        display: none;
    };
}
</style>