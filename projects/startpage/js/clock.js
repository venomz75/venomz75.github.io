// Entire date & time calculations
  function date_time_time(id)
    {
      date = new Date;
      year = date.getFullYear();
      month = date.getMonth();
      months = new Array('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');
      d = date.getDate();
      suffix = 'th';
      timeofday = '';
      day = date.getDay();
      days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      h = date.getHours();
      if(h<10)
        {
          h = "0"+h;
        }
      m = date.getMinutes();
      if(m<10)
        {
          m = "0"+m;
        }
      result = '' +h+':'+m; //prints only time e.g. '12:00'
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time_time("'+id+'");','1000');
      return true;
    }


//Prints out the weekday e.g. 'Monday'
  function date_time_weekday(id)
    {
      result = days[day];
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time_weekday("'+id+'");','1000');
      return true;
    }


//Prints out the date e.g. '1st january 2018'
  function date_time_date(id)
    {
      if(d==1 || d==21 || d==31)
        {
          suffix = 'st';
        }
      if(d==2 || d==22)
        {
          suffix = 'nd';
        }
      if(d==3 || d==23)
        {
          suffix = 'rd';
        }
      result = ''+d+suffix+' '+months[month]+' '+year;
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time_date("'+id+'");','1000');
      return true;
    }

  function date_time_timeofday(id)
    {
      if(h>=6 && h<12)
        {
          timeofday = 'morning, ';;
        }
      if(h>=12 && h<18)
        {
          timeofday = 'afternoon, ';
        }
      if(h>=18 && h<22)
        {
          timeofday = 'evening, ';
        }
      if(h>=22 && h<=24)
        {
          timeofday = 'night, ';
        }
      if(h>=0 && h<6)
        {
          timeofday = 'night, ';
        }
      result = 'Good '+timeofday+'Adam.';
      console.log(timeofday);
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time_timeofday("'+id+'");','1000');
      return true;
      }
