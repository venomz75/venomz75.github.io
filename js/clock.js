  function date_time_time(id)
    {
      date = new Date;
      year = date.getFullYear();
      month = date.getMonth();
      months = new Array('JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER');
      d = date.getDate();
      suffix = 'th';
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
      result = '' +h+':'+m;
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time_time("'+id+'");','1000');
      return true;
    }



  function date_time_weekday(id)
    {
      result = days[day];
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time_day("'+id+'");','1000');
      return true;
    }



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
