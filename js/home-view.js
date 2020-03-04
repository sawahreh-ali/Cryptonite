// Create home view
var homeView = function(data) {
    let innerHtml = "";
    for(let i =0; i < 98; i+=3)
    {
        innerHtml += 
        `
        <div class="row no-gutters">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${data[i].symbol}</h5>
              <label class="switch switch-flat">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" data-on="On" data-off="Off"></span> 
                <span class="switch-handle"></span> 
              </label>
              <p class="card-text">${data[i].name}</p>
              <button class="btn btn-primary" data-toggle="collapse" data-target="#more-info-${data[i].id}">More Info...</button>
              <div id="more-info-${data[i].id}" class="collapse p-4">
                ${moreInfo(data[i].id).then(html => {
                  $(`#more-info-${data[i].id}`).html(html);
                })}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${data[i + 1].symbol}</h5>
              <label class="switch switch-flat">
                <input class="switch-input" type="checkbox" />
                <span class="switch-label" data-on="On" data-off="Off"></span> 
                <span class="switch-handle"></span> 
              </label>
              <p class="card-text">${data[i + 1].name}</p>
              <button class="btn btn-primary" data-toggle="collapse" data-target="#more-info-${data[i + 1].id}">More Info...</button>
              <div id="more-info-${data[i + 1].id}" class="collapse p-4">
                ${moreInfo(data[i + 1].id).then(html => {
                  $(`#more-info-${data[i + 1].id}`).html(html);
                })}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
              <div class="card-body">
                  <h5 class="card-title">${data[i + 2].symbol}</h5>
                  <label class="switch switch-flat">
                    <input class="switch-input" type="checkbox" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> 
                    <span class="switch-handle"></span> 
                  </label>
                  <p class="card-text">${data[i + 2].name}</p>
                  <button class="btn btn-primary" data-toggle="collapse" data-target="#more-info-${data[i + 2].id}">More Info...</button>
                  <div id="more-info-${data[i + 2].id}" class="collapse p-4">
                    ${moreInfo(data[i + 2].id).then(html => {
                      $(`#more-info-${data[i + 2].id}`).html(html);
                    })}
                  </div>
              </div>
          </div>
        </div>
      </div>
        `;
    }
    // add event listener to checkboxes
    $('input:checkbox').on("click", function(){
      if($(this.prop("checked"))){
          alert("checked");
      } else {
          alert("unchecked");
      }
  });
    return innerHtml;
};

// More Info handler
 async function moreInfo(id) {
   let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
   let json = await response.json();
   let htmlText = `
                  <ul class="list-group">
                    <li class="list-group-item"><img src="${json.image.small}"></img></li>
                    <li class="list-group-item">USD: ${json.market_data.current_price["usd"]}&#36;</li>
                    <li class="list-group-item">EUR: ${json.market_data.current_price["eur"]}&#128;</li>
                    <li class="list-group-item">ILS: ${json.market_data.current_price["ils"]}&#8362;</li>
                  </ul>
                  `;
    return htmlText;
 }
export { homeView };