(function() {
  var RailsRumble;

  RailsRumble = {
    initialize: function() {
      RailsRumble.fetchJobs();
      RailsRumble.fetchSponsors();
    },
    fetchJobs: function() {
      $.ajax({
        url: 'http://railsrumble.com/jobs.json',
        data: {},
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'RailsRumble.renderJobs',
        success: function(){
          alert("success");
        }
      });
    },
    renderJobs: function(data) {
      try {
        if(data['jobs'].length > 0) {
          var job        = data['jobs'][_.random(data['jobs'].length - 1)];
          var jobUrl     = 'http://railsrumble.com/jobs/' + job['path'];
          var jobSummary = job['company_name'] + ' is hiring a <span>' + job['title'] + '</span> (' + job['location'] + ').';

          $('#job-highlight div').prepend($('<a></a>').attr('href', jobUrl).html(jobSummary));

        } else {
          $('#job-highlight').remove();
        }
      }catch(a){}
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

        if(data['competition']['stage'] != 'anticipation') {
          $('#sponsorship-interest').parents('article').hide();
        }

        _.each(_.sortBy(data['competition']['sponsors'], function(sponsor){ return sponsor['position']; }), function(sponsor, position) {
          var image = $('<img/>').attr('src', sponsor['image_for_sidebar']);
          var link  = $('<a></a>').attr('href', sponsor['url']).attr('target', '_blank');

          // Generate Sponsor
          $('#sponsors').append($('<div></div>').append(link.clone().append(image.clone())));

          // Generate Sponsor Highlight Block
          if(sponsor['highlighted'] && (sponsor['bio'] != '')) {
            $('#sponsor-highlight div').empty();
            $('#sponsor-highlight div').append(link.clone().append(image.clone()));
            $('#sponsor-highlight div').append(link.clone().text(sponsor['bio']));
            $('#sponsor-highlight').show();
          }
        });
      }catch(a){}
    }
  };

  window.RailsRumble = RailsRumble;

}).call(this);
