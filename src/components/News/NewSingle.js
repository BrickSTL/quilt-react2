import React from 'react';



  const NewSingle = ({item}) => {
    let source = item.source.name;
    let image = item.urlToImage;
    let artFrame = (
      <a href={item.url} target='_blank'>
        <div className="card-image">
          <img src={item.urlToImage}/>
        </div>
        <div className="article-text text-left">
        <span style={{fontSize:'22px'}} className='row'>{item.title}</span>
        <span className='row'><p className='sourceDisplay'>{item.source.name}</p></span>
        <span className='row'>{item.author}</span>
        <span className='row'>{item.publishedAt}</span>
        <p className="row"><i className="fa fa-save"></i> Save Article</p>

        </div>
      </a>
    )
    switch (source) {
      /*RED 3*/
      case 'Breitbart News':
        return (
          <div className="element-item red3 newsArticle col-md-3 col-sm">
            {artFrame}
          </div>
        )
        break;
      /*RED 2*/
      case 'Fox News':
        return (
          <div className="element-item red2 newsArticle col-md-3 col-sm">
            {artFrame}
          </div>
        )
        break;
      /*RED 1*/
      case 'The Wall Street Journal':
        return (
          <div className="element-item red1 newsArticle col-md-3 col-sm">
            {artFrame}
          </div>
        )
        break;
      /*BLUE 1*/
      case 'The New York Times':
      case 'Axios':
      case 'The Washington Post':
      case 'The Guardian (UK)':
      case 'NPR':
      case 'BBC News':
        return (
          <div className="element-item blue1 col-md-3 col-sm">
            {artFrame}
          </div>
        )
        break;
      /*BLUE 2*/
      case 'CBS News':
      case 'Politico':
      case 'New York Magazine':
      case 'Vice News':
      case 'Wired':
        return (
          <div className="element-item blue2 col-md-3 col-sm">
            {artFrame}
          </div>
        )
        break;
      /*BLUE 3*/
      case 'Buzzfeed':
      case 'MSNBC':
      case 'The Huffington Post':
        return (
          <div className="element-item blue3 col-md-3 col-sm">
            {artFrame}
          </div>
        )
        break;
      /*PURPLE*/
      default:
        return (
          <div className="element-item purple col-md-3 col-sm">
            {artFrame}
          </div>
        )
    }
  };




export default NewSingle;
