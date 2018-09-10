export EDITOR=vim

# Remember an incredible amount of commands in the history.
export HISTSIZE=1000000
export HISTCONTROL=ignoreboth
export HISTFILESIZE=1000000000
shopt -s histappend
export PROMPT_COMMAND="history -a;$PROMPT_COMMAND"
