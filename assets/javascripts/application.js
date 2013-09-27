(function() {
  var RailsRumble;

  RailsRumble = {
    initialize: function() {
      RailsRumble.fetchSponsors();
    },
    fetchSponsors: function() {
      $.ajax({
        url: 'http://railsrumble.com/sponsors.json',
        data: {},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'RailsRumble.renderSponsors',
        success: function(){
          alert("success");
        }
      });
    },
    renderSponsors: function(data) {
      try {
        $('#sponsors h1').text(data['competition']['year'] + ' Rumble Sponsors');
        _.each(_.sortBy(data['competition']['sponsors'], function(sponsor){ return sponsor['position']; }), function(sponsor, position) {
          image = $('<img/>').attr('src', sponsor['image_for_sidebar']);
          link  = $('<a></a>').attr('href', sponsor['url']).attr('target', '_blank');
          $('#sponsors').append($('<div></div>').append(link.append(image)));
        });
      }catch(a){}
    }
  };

  window.RailsRumble = RailsRumble;

}).call(this);