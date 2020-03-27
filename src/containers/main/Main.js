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
          { label: "ABAP", value: "ABAP" },
          { label: "ActionScript", value: "ActionScript" },
          { label: "Ada", value: "Ada" },
          { label: "Agda", value: "Agda" },
          { label: "AGS", value: "AGS" },
          { label: "Alloy", value: "Alloy" },
          { label: "AMPL", value: "AMPL" },
          { label: "ANTLR", value: "ANTLR" },
          { label: "ApacheConf", value: "ApachConf" },
          { label: "Apex", value: "Apex" },
          { label: "API", value: "API" },
          { label: "APL", value: "APL" },
          { label: "AppleScript", value: "AppleScript" },
          { label: "Arc", value: "Arc" },
          { label: "Arduino", value: "Arduino" },
          { label: "ASP", value: "ASP" },
          { label: "AspectJ", value: "AspectJ" },
          { label: "Assembly", value: "Assembly" },
          { label: "ATS", value: "ATS" },
          { label: "Augeus", value: "Augeus" },
          { label: "AutoHotKey", value: "AutoHotKey" },
          { label: "AutoIt", value: "AutoIt" },
          { label: "Batchfile", value: "Batchfile" },
          { label: "BlitzMax", value: "BlitzMax" },
          { label: "Boo", value: "Boo" },
          { label: "Brainfuck", value: "Brainfuck" },
          { label: "Bro", value: "Bro" },
          { label: "C", value: "C" },
          { label: "C++", value: "C++" },
          { label: "C#", value: "Csharp" },
          { label: "Cap", value: "Cap" },
          { label: "Ceylon", value: "Ceylon" },
          { label: "Chapel", value: "Chapel" },
          { label: "Cirru", value: "Cirru" },
          { label: "Clarion", value: "Clarion" },
          { label: "Clean", value: "Clean" },
          { label: "Click", value: "Closure" },
          { label: "CoffeeScript", value: "CoffeeScript" },
          { label: "ColdFusion", value: "Coldfusion" },
          { label: "Common", value: "Common" },
          { label: "Component", value: "Component" },
          { label: "Crystal", value: "Crystal" },
          { label: "Cucumber", value: "Cucumber" },
          { label: "CSS", value: "CSS" },
          { label: "Cuda", value: "Cuda" },
          { label: "D", value: "D" },
          { label: "Dart", value: "Dart" },
          { label: "DIGITAL", value: "DIGITAL" },
          { label: "DM", value: "DM" },
          { label: "Dogescript", value: "Dogescript" },
          { label: "Dylan", value: "Dylan" },
          { label: "E", value: "E" },
          { label: "eC", value: "eC" },
          { label: "Eiffel", value: "Eiffel" },
          { label: "ECL", value: "ECL" },
          { label: "Elixir", value: "Elixir" },
          { label: "Elm", value: "Elm" },
          { label: "Emacs", value: "Emacs" },
          { label: "Erlang", value: "Erlang" },
          { label: "Emberscript", value: "Emberscript" },
          { label: "F#", value: "F#" },
          { label: "Factor", value: "Factor" },
          { label: "Fancy", value: "Fancy" },
          { label: "Fantom", value: "Fantom" },
          { label: "FLUX", value: "FLUX" },
          { label: "Forth", value: "Forth" },
          { label: "FORTRAN", value: "FORTRAN" },
          { label: "FreeMarker", value: "FreeMarker" },
          { label: "Frege", value: "Frege" },
          { label: "Game", value: "Game" },
          { label: "GDScript", value: "GDScript" },
          { label: "Gettext", value: "Gettext" },
          { label: "Glyph", value: "Glyph" },
          { label: "Gunplot", value: "Gunplot" },
          { label: "Go", value: "GO" },
          { label: "Golo", value: "Golo" },
          { label: "Gosu", value: "Gosu" },
          { label: "Grammatical", value: "Grammatical" },
          { label: "Groff", value: "Groff" },
          { label: "Groovy", value: "Groovy" },
          { label: "Hack", value: "Hack" },
          { label: "Harbour", value: "Harbour" },
          { label: "Haskell", value: "Haskell" },
          { label: "Haxe", value: "Haxe" },
          { label: "HTML", value: "HTML" },
          { label: "Hy", value: "Hy" },
          { label: "IDL", value: "IDL" },
          { label: "Idris", value: "Idris" },
          { label: "IGOR", value: "IGOR" },
          { label: "Inform", value: "Inform" },
          { label: "Inno", value: "Inno" },
          { label: "Io", value: "Io" },
          { label: "Ioke", value: "Ioke" },
          { label: "Isabelle", value: "Isabelle" },
          { label: "J", value: "J" },
          { label: "Java", value: "Java" },
          { label: "JSONiq", value: "JSONiq" },
          { label: "Julia", value: "Julia" },
          { label: "Juptyer", value: "Jupyter" },
          { label: "KiCad", value: "kiCad" },
          { label: "Kotlin", value: "Kotlin" },
          { label: "Krl", value: "Krl" },
          { label: "Lasso", value: "Lasso" },
          { label: "Lex", value: "Lex" },
          { label: "LiveScript", value: "Livesrcipt" },
          { label: "LLVM", value: "LLVM" },
          { label: "LOLCODE", value: "LOLCODE" },
          { label: "LookMl", value: "LookMl" },
          { label: "LSL", value: "LSL" },
          { label: "Lua", value: "Lua" },
          { label: "Makefile", value: "Makefile" },
          { label: "Mask", value: "Mask" },
          { label: "Matlab", value: "Matlab" },
          { label: "Max", value: "Max" },
          { label: "MAXScript", value: "MAXScript" },
          { label: "Mercury", value: "Mercury" },
          { label: "Metal", value: "Metal" },
          { label: "Mirah", value: "Mirah" },
          { label: "MTML", value: "MTML" },
          { label: "Module", value: "Module" },
          { label: "Modula", value: "Modula" },
          { label: "NCL", value: "NCL" },
          { label: "Nemerle", value: "Nemerle" },
          { label: "nesC", value: "nesC" },
          { label: "NetLink", value: "Netlink" },
          { label: "Netlogo", value: "Netlogo" },
          { label: "NewLisp", value: "NewLisp" },
          { label: "Nimrod", value: "Nimrod" },
          { label: "Nit", value: "Nit" },
          { label: "Nix", value: "Nix" },
          { label: "Nu", value: "Nu" },
          { label: "OCaml", value: "OCaml" },
          { label: "ooc", value: "ooc" },
          { label: "Opal", value: "Opal" },
          { label: "Openedge", value: "Openedge" },
          { label: "Oxygene", value: "Oxygene" },
          { label: "Oz", value: "Oz" },
          { label: "Pan", value: "Pan" },
          { label: "Papyrus", value: "Papyrus" },
          { label: "Parrot", value: "Parrot" },
          { label: "Pascal", value: "Pascal" },
          { label: "Pawn", value: "Pawn" },
          { label: "Perl", value: "Perl" },
          { label: "PHP", value: "PHP" },
          { label: "Python", value: "Python" },
          { label: "PowerShell", value: "PowerShell" },
          { label: "Piglatin", value: "Piglatin" },
          { label: "Pig", value: "Pig" },
          { label: "PLSQL", value: "PLSQL" },
          { label: "PogoScript", value: "PogoScript" },
          { label: "PostScript", value: "PostScript" },
          { label: "POV", value: "POV" },
          { label: "Prolog", value: "Prolog" },
          { label: "Puppet", value: "Puppet" },
          { label: "PureBasic", value: "PureBasic" },
          { label: "Pure", value: "Pure" },
          { label: "PureScript", value: "Purescript" },
          { label: "R", value: "R" },
          { label: "Ragel", value: "Ragel" },
          { label: "Racket", value: "Racket" },
          { label: "Rust", value: "Rust" },
          { label: "Ruby", value: "Ruby" },
          { label: "Shell", value: "Shell" },
          { label: "Swift", value: "Swift" },
          { label: "Scala", value: "Scala" },
          { label: "Typescript", value: "Typescript" },
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

      onToggleHandler = (event,type) => {
          event.preventDefault();
          if(type === "reposearch"){
              this.setState({ trendingRepos : false, searchRepos: true})
              this.fetchData("reposearch")
          }
          else if(type === "trending"){
              this.setState({ trendingRepos : true, searchRepos : false})
          }
      }

    render(){

        let contentSearch, languageSearch, cards, text;

        text = <h1 className="Main--Text">Dislaying the trennding repositories on github.</h1>
   

        languageSearch = <div className="Main--TrendingSearchLanguage">
                            <Select className="Main--Select" options={this.state.optionsLanguage} placeholder="Language" onChange={event => this.onSelectHandler(event, "language")} />
                        </div>


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
                                            <Select placeholder="Duration" className="Main--Select" options={this.state.options} onChange={event => this.onSelectHandler(event, "duration")} />
                                        </div>
                                        <div className="Main--Buttons">
                                            <button onClick={event => this.onClickHandler(event,"trending")} className="Main--Results">Search</button> 
                                            <a onClick={event => this.onToggleHandler(event,"reposearch")} className="Main--Results">Repo search</a>
                                        </div>

                                    </div>

                                </div>
                            </div>
            if(this.state.notfound === "404"){
                    cards = <div className="Main--RepoNotFound">
                                <h1 className="Main--404">404</h1>
                                <h2 className="Main--404text">No Repositories Found!</h2>
                        </div>
                    text = <h1></h1>
                }
            else{
                text = <h1 className="Main--Text">Displaying the trending repositories in {this.state.language}</h1>
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
                                        </div>
                                        {languageSearch}
                                        <div className="Main--Buttons">
                                            <button onClick={event => this.onClickHandler(event,"reposearch")} className="Main--Results">Search</button> 
                                            <a onClick={event => this.onToggleHandler(event,"trending")} className="Main--Results">Trending Repos</a>  
                                        </div>
                                    </div>

                                </div>
                            </div>
            if(this.state.notfound === "404"){
                cards = <div className="Main--RepoNotFound">
                                <h1 className="Main--404">404</h1>
                                <h2 className="Main--404text">No Repositories Found!</h2>
                        </div>  
                text = <h1></h1>          
                }
            else{
                text = <h1 className="Main--Text">Displaying the best repositories for {this.state.reposearch} in {this.state.language}</h1>
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
                        {text}
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;