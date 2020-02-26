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
              <button class="btn btn-primary">More Info...</button>
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
              <button class="btn btn-primary">More Info...</button>
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
                  <button class="btn btn-primary">More Info...</button>
              </div>
          </div>
        </div>
      </div>
        `;
    }
    return innerHtml;
};

export { homeView };