import React, {Component} from "react";
import Select from 'react-select';

import Card from '../../components/card/Card';
import logo from '../../img/github.png';
import './Main.css';

class Main extends Component {
    
    state={
        trendingRepos: true,
        searchRepos: false,
        reposearch: "tetris",
        language: "javascript",
        languagePresent: true,
        duration: "today",
        notfound: null,
        repolist: [],
        searchrepolist: {items : []},
        options: [
            { label: "Today", value: "today" },
            { label: "Weekly", value: "Weekly" },
            { label: "Monthly", value: "Monthly" },
            { label: "Yearly", value: "Yearly" },
          ],
        optionsLanguage: [
          { label: "Javascript", value: "Javascript" },
          { label: "Python", value: "Python" },
          { label: "Java", value: "Java" },
          { label: "C++", value: "C++" },
          { label: "PHP", value: "PHP" },
          { label: "C#", value: "Csharp" },
          { label: "Shell", value: "Shell" },
          { label: "Go", value: "GO" },
          { label: "Typescript", value: "Typescript" },
          { label: "Ruby", value: "Ruby" },
          { label: "Swift", value: "Swift" },
          { label: "Kotlin", value: "Kotlin" },
          { label: "R", value: "R" },
          { label: "Scala", value: "Scala" },
          { label: "Rust", value: "Rust" },
          { label: "Lua", value: "Lua" },
          { label: "Matlab", value: "Matlab" },
          { label: "PowerShell", value: "PowerShell" },
          { label: "CoffeeScript", value: "CoffeeScript" },
          { label: "Perl", value: "Perl" },
          { label: "Groovy", value: "Groovy" },
          { label: "Haskell", value: "Haskell" },
          { label: "HTML", value: "HTML" },
          { label: "CSS", value: "CSS" },
        ]
      }
    
      componentDidMount(){
          this.fetchData("default");
      }
    
      fetchData = (type) => {
        let url;
        if(type === "default"){
            url = "https://github-trending-api.now.sh/repositories?since=" + encodeURI(this.state.duration)
            fetch(url).then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({repolist : res})
            })
        }
        else if(type === "trending"){
            url= "https://github-trending-api.now.sh/repositories?since=" + encodeURI(this.state.duration) + "&language=" + encodeURI(this.state.language);
            fetch(url).then(res => {
                return res.json()
            })
            .then(res => {
                if(res.length == 0){
                    this.setState({notfound : "404"})
                }
                else{
                    this.setState({repolist : res, notfound: null})
                }
            })
        }
        else if(type === "reposearch"){
            url= "https://api.github.com/search/repositories?sort=stars&order=desc" + "&q=" + encodeURI(this.state.reposearch) + "+language:" + encodeURI(this.state.language)
            fetch(url).then(res => {
                return res.json()
            })
            .then(res => {
                if(res["items"].length == 0){
                    this.setState({notfound : "404"})
                }
                else{
                    this.setState({searchrepolist : res, notfound: null})
                }
            })
        }
      }
    
      onChangeHandler = (event, type) => {
        if(type === "language"){
            let lang = this.state.language;
            lang = event.target.value;
            this.setState({language : lang}, () => console.log(this.state.language))
        }
        else if(type === "reposearch"){
            let reposearch = this.state.reposearch;
            reposearch = event.target.value;
            this.setState({reposearch: reposearch}, () => console.log(this.state.reposearch))
        }
      }
    
      onSelectHandler = (event, type) => {
        if(type === "language"){
          let lang = this.state.language;
          lang = event.value;
          this.setState({language: lang}, () => console.log(this.state.language))
        }
        else if(type === "duration"){
          let duration = this.state.duration;
          duration = event.value;
          this.setState({duration: duration}, () => console.log(this.state.duration))
        }
      }
    
      onClickHandler = (event, type) => {
        event.preventDefault();
        if(type === "trending"){
          this.fetchData("trending")
        }
        else if(type === "reposearch"){
            this.fetchData("reposearch")
        }
      }
      
      languageHandler = () => {
          let languagePresent = this.state.languagePresent;
          this.setState({languagePresent: !languagePresent})
      }

      onToggleHandler = (event,type) => {
          event.preventDefault();
          if(type === "reposearch"){
              this.setState({ trendingRepos : false, searchRepos: true })
              this.fetchData("reposearch")
          }
          else if(type === "trending"){
              this.setState({ trendingRepos : true, searchRepos : false})
          }
      }

    render(){

        let contentSearch;
        let languageSearch;
        let cards;

        if(!this.state.languagePresent){
            languageSearch = <div className="Main--TrendingSearchLanguage">
                            <input type="search" className="Main--SearchField" onChange={event => this.onChangeHandler(event,"language")} placeholder="Type the language!" />
                            <a className="Main--LanguageToggler" onClick={this.languageHandler}>Back</a>

            </div> 
        }
        else if(this.state.languagePresent){
            languageSearch = <div className="Main--TrendingSearchLanguage">
                            <Select options={this.state.optionsLanguage} onChange={event => this.onSelectHandler(event, "language")} />
                            <a className="Main--LanguageToggler" onClick={this.languageHandler}>Some Other Language?</a>
            </div>
        }

        if(this.state.trendingRepos){
            
            contentSearch = <div className="Main--TrendingSearch">
                                <div className="Main--TrendingSearchWrapper">

                                    <div className="Main--LogoContainer">
                                        <img src={logo} className="Main--Logo" alt="Logo" />
                                        <div className="Main--LogoContainerContent">
                                            <h1 className="Main--LogoHeading">GitTrends</h1>
                                            <h3 className="Main--LogoMotto">Your search for Repositories ends here!</h3>
                                        </div>
                                    </div>
                                    <div className="Main-TrendingSearchFilter">
                                        {languageSearch}
                                        <div className="Main--TrendingSearchDuration">
                                            <Select options={this.state.options} onChange={event => this.onSelectHandler(event, "duration")} />
                                            <a onClick={event => this.onToggleHandler(event,"reposearch")} className="Main--Toggle">Looking for a particular repo?</a>
                                        </div>
                                        <button onClick={event => this.onClickHandler(event,"trending")} className="Main--Results">Search</button> 
                                    </div>

                                </div>
                            </div>
            if(this.state.notfound === "404"){
                    cards = <div className="Main--RepoNotFound">
                                <h1 className="Main--404">404</h1>
                                <h2 className="Main--404text">No Repositories Found!</h2>
                        </div>
                }
            else{
                cards =  this.state.repolist.map(repo => {
                    return(
                        <Card key={repo.url} href={repo.avatar} lang={repo.language} url={repo.url} author={repo.author} repoName={repo.name} 
                        content={repo.description} stars={repo.stars} forks={repo.forks} color={repo.languageColor} />
                    )
                })
            }     
        }
        
        else if(this.state.searchRepos){
            contentSearch = <div className="Main--RepoSearch">
                                <div className="Main--RepoSearchWrapper">
                                    <div className="Main--LogoContainer">
                                        <img src={logo} className="Main--Logo" alt="Logo" />
                                        <div className="Main--LogoContainerContent">
                                            <h1 className="Main--LogoHeading">GitTrends</h1>
                                            <h3 className="Main--LogoMotto">Your search for Repositories ends here!</h3>
                                        </div>
                                    </div>

                                    <div className="Main--RepoSearchFilter">
                                        <div className="Main--RepoSearchField">
                                            <input type="search" className="Main--SearchField" onChange={event => this.onChangeHandler(event,"reposearch")} placeholder="Type (e.g. Tetris)" />
                                            <a onClick={event => this.onToggleHandler(event,"trending")} className="Main--Toggle">Looking for trending repos?</a>
                                        </div>
                                        {languageSearch}
                                        <button onClick={event => this.onClickHandler(event,"reposearch")} className="Main--Results">Search</button> 
                                    </div>

                                </div>
                            </div>
            if(this.state.notfound === "404"){
                cards = <div className="Main--RepoNotFound">
                                <h1 className="Main--404">404</h1>
                                <h2 className="Main--404text">No Repositories Found!</h2>
                        </div>            
                }
            else{
                cards = this.state.searchrepolist["items"].map(repo => {
                    return(
                        <Card key={repo.id} href={repo.owner.avatar_url} lang={repo.language} url={repo.owner.html_url} author={repo.owner.login} repoName={repo.name}
                        content={repo.description} stars={repo.stargazers_count} forks={repo.forks} />
                    )
                })
            }
        }

        return(
            <div className="Main">
                {contentSearch}
                <div className="Main--ReposList">
                    <div className="Main--RepoListContainer">
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;