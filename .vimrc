set autoread

set ruler
set nu

set wildmenu

set ignorecase
set smartcase

set hlsearch

syntax enable
set background=dark

try
    colorscheme desert
catch
endtry

set nobackup
set nowb
set noswapfile

set expandtab
set smarttab

vnoremap // y/<C-R>"<CR>

nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

set splitbelow
set splitright
