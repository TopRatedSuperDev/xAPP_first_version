
var output = "OUTPUT: "



function _0x315a()
{var _0x56f610=['idx','1338010xdAwjK','2316226VsYpRW','col','12UmaaPf','5KRZNpE','replace','878402DjBbSf','indexOf','2905029GikWRc','substring','250384PPNYJY','746982VJhunv','234cUmMKk','length','lastIndexOf','854AqbazT','8GKyaPy'];_0x315a=function(){return _0x56f610;};return _0x315a();}

function _0x2d4b(_0x2769a3,_0x26604d){var _0x315a5d=_0x315a();return _0x2d4b=function(_0x2d4b77,_0x444c35){_0x2d4b77=_0x2d4b77-0x157;var _0x3bf80f=_0x315a5d[_0x2d4b77];return _0x3bf80f;},_0x2d4b(_0x2769a3,_0x26604d);}

(function(_0x6fe0ed,_0x264ab5){var _0x9e1206=_0x2d4b,_0x1f1364=_0x6fe0ed();while(!![]){try{var _0x50db34=-parseInt(_0x9e1206(0x165))/0x1*(parseInt(_0x9e1206(0x162))/0x2)+parseInt(_0x9e1206(0x161))/0x3+-parseInt(_0x9e1206(0x160))/0x4*(parseInt(_0x9e1206(0x15a))/0x5)+parseInt(_0x9e1206(0x159))/0x6*(-parseInt(_0x9e1206(0x15c))/0x7)+parseInt(_0x9e1206(0x166))/0x8*(parseInt(_0x9e1206(0x15e))/0x9)+-parseInt(_0x9e1206(0x168))/0xa+parseInt(_0x9e1206(0x157))/0xb;if(_0x50db34===_0x264ab5)break;else _0x1f1364['push'](_0x1f1364['shift']());}catch(_0xce8acf){_0x1f1364['push'](_0x1f1364['shift']());}}}(_0x315a,0x3962e));

function string_with_arrows(_0x2b3ddc,_0x4ffdcc,_0xe0e895){

var _0xe38c90=_0x2d4b,_0x34278a='',_0x20c686=_0x2b3ddc[_0xe38c90(0x15f)](0x0,_0x4ffdcc['idx']),_0x4c39d2=Math['max'](_0x20c686[_0xe38c90(0x164)]('\x0a'),0x0),_0x2f47c2=_0xe0e895['ln']-_0x4ffdcc['ln']+0x1,_0x2f91c0=_0x2b3ddc['substring'](_0xe0e895[_0xe38c90(0x167)]),_0x5687ec=_0x2f91c0[_0xe38c90(0x15d)]('\x0a')+_0xe0e895[_0xe38c90(0x167)];_0x2f91c0[_0xe38c90(0x15d)]('\x0a')<0x0&&(_0x5687ec=_0x2b3ddc[_0xe38c90(0x163)]);for(let _0x455af8=0x0;_0x455af8<_0x2f47c2;_0x455af8++){var _0x1a7e8f=_0x2b3ddc['slice'](_0x4c39d2,_0x5687ec),_0x49b792;_0x455af8==0x0?_0x49b792=_0x4ffdcc[_0xe38c90(0x158)]:_0x49b792=0x0;var _0x2a7c7d;_0x455af8==_0x2f47c2-0x1?_0x2a7c7d=_0xe0e895[_0xe38c90(0x158)]:_0x2a7c7d=_0x1a7e8f[_0xe38c90(0x163)]-0x1;_0x34278a+=_0x1a7e8f+'\x0a';for(let _0x57dc20=0x0;_0x57dc20<_0x49b792;_0x57dc20++){_0x34278a+='\x20';}for(let _0x2a6d73=0x0;_0x2a6d73<_0x2a7c7d-_0x49b792;_0x2a6d73++){_0x34278a+='^';}var _0x4c39d2=_0x5687ec,_0x2f91c0=_0x2b3ddc[_0xe38c90(0x15f)](_0x4c39d2+0x1),_0x5687ec=_0x2f91c0[_0xe38c90(0x15d)]('\x0a')+_0x4c39d2+0x1;_0x2f91c0['indexOf']('\x0a')<0x0&&(_0x5687ec=_0x2b3ddc[_0xe38c90(0x163)]);}return _0x34278a[_0xe38c90(0x15b)]('\x09','');

}
//*/

//#######################################
//# CONSTANTS
//#######################################

const DIGITS = '0123456789'
const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LETTERS_DIGITS = LETTERS + DIGITS


//#######################################
//# ERRORS
//#######################################

class Error
{
  constructor(pos_start, pos_end, error_name, details)
  {
    this.pos_start = pos_start;
    this.pos_end = pos_end;
    this.error_name = error_name;
    this.details = details;
    this.class_name = "Error"
  }
  
  
  
  as_string()
  {
    
    let result  = this.error_name + ":" + this.details+"\n";
    result += 'File ' + this.pos_start.fn + ',' + 'line ' + (this.pos_start.ln + 1).toString();
    result += '\n\n' + string_with_arrows(this.pos_start.ftxt, this.pos_start, this.pos_end);

    return result
  }
}

class IllegalCharError extends Error
{
  constructor(pos_start, pos_end, details)
  {
    super(pos_start, pos_end, 'error: Illegal Character', details)
    this.class_name = "IllegalCharError"
  }
}
class ExpectedCharError extends Error
{
  constructor( pos_start, pos_end, details)
  {
    super(pos_start, pos_end, 'error: Expected Character', details)
    this.class_name = "ExpectedCharError"
  }
}

class InvalidSyntaxError extends Error
{
  constructor( pos_start, pos_end, details='')
  {
    super(pos_start, pos_end, 'error: Invalid Syntax', details)
    this.class_name = "InvalidSyntaxError"
  }
}

class RTError extends Error
{
  constructor( pos_start, pos_end, details, context)
  {
    super(pos_start, pos_end, 'error: Runtime Error', details)
    this.context = context
    this.class_name = "RTError"
  }

  as_string()
  {
    let result  = this.generate_traceback();
    result += this.error_name + ":" + this.details;
    result += '\n\n' + string_with_arrows(this.pos_start.ftxt, this.pos_start, this.pos_end);
    return result
  }

  generate_traceback()
  {
    let result = '';
    let pos = this.pos_start
    let ctx = this.context

    while(ctx)
    {
      result = '  File' + pos.fn + ',' + ' line ' + (pos.ln + 1).toString() + ',' + ' in ' + ctx.display_name+'\n' + result
      pos = ctx.parent_entry_pos
      ctx = ctx.parent
    }
    
    return '\nTraceback (most recent call last):\n' + result
  }
}


//#######################################
//# POSITION
//#######################################


class Position
{
  constructor(idx, ln, col, fn, ftxt)
  {
    this.idx = idx;
    
    if(ln == 0)
    {
      this.ln = 1;
    }
    else
    {
      this.ln = ln;
    }
    
    this.col = col;
    this.fn = fn;
    this.ftxt = ftxt;
    this.class_name = "Position"
  }

  advance(current_char=null)
  {
    this.idx += 1;
    this.col += 1;

    if(current_char == '\n')
    {
      this.ln += 1;
      this.col = 0;
    }
    
    return this
  }

  copy()
  {
    return new Position(this.idx, this.ln, this.col, this.fn, this.ftxt)
  }
}

//*/


//#######################################
//# TOKENS
//#######################################

const TT_INT            = 'INT'
const TT_FLOAT          = 'FLOAT'
const TT_STRING         = 'STRING'
const TT_IDENTIFIER     = 'IDENTIFIER'
const TT_KEYWORD        = 'KEYWORD'
const TT_PLUS           = 'PLUS'
const TT_MINUS          = 'MINUS'
const TT_MUL            = 'MUL'
const TT_DIV            = 'DIV'
const TT_POW            = 'POW'
const TT_EQ             = 'EQ'
const TT_LPAREN         = 'LPAREN'
const TT_RPAREN         = 'RPAREN'
const TT_LSQUARE        = 'LSQUARE'
const TT_RSQUARE        = 'RSQUARE'
const TT_EE             = 'EE'
const TT_NE             = 'NE'
const TT_LT             = 'LT'
const TT_GT             = 'GT'
const TT_LTE            = 'LTE'
const TT_GTE            = 'GTE'
const TT_COMMA          = 'COMMA'
const TT_ARROW          = 'ARROW'
const TT_NEWLINE        = 'NEWLINE'
const TT_EOF            = 'EOF'

const KEYWORDS = [
  'VAR',
  'AND',
  'OR',
  'NOT',
  'IF',
  'ELIF',
  'ELSE',
  'FOR',
  'TO',
  'STEP',
  'WHILE',
  'FUN',
  'THEN',
  'END',
  'RETURN',
  'CONTINUE',
  'BREAK',
]



class Token
{
  constructor(type_, value=null, pos_start=null, pos_end=null)
  {
    this.type = type_
    this.value = value
    this.class_name = "Token"

    if(pos_start)
    {
      this.pos_start = pos_start.copy()
      this.pos_end = pos_start.copy()
      this.pos_end.advance()
    }

    if(pos_end)
    {
      this.pos_end = pos_end.copy()
    }
  }

  matches(type_, value)
  {
    return this.type == type_ && this.value == value
  }
  
  repr()
  {
    if(this.value)
    {
      return this.type+':'+this.value
    }
    
    return this.type
  }
}


//#######################################
//# LEXER
//#######################################

class Lexer
{
  constructor(fn, text)
  {
    this.class_name = "Lexer"
    this.fn = fn
    this.text = text
    this.pos = new Position(-1, 0, -1, fn, text)
    this.current_char = null
    this.advance()
    
  }
  
  advance()
  {
    this.pos.advance(this.current_char)
    
    if(this.pos.idx < this.text.length)
    {
      this.current_char = this.text[this.pos.idx]; 
    }
    else
    {
      this.current_char = null;
    }
    //this.current_char = this.text[this.pos.idx] if(this.pos.idx < len(this.text) else null
  }
  
  make_tokens()
  {
    let tokens = []
    let empty_tokens = [];

    while(this.current_char != null)
    {
      if( ' \t'.includes(this.current_char))
        this.advance()
      else if(this.current_char == '#')
        this.skip_comment()
      else if( ';\n'.includes(this.current_char))
      {
        tokens.push(new Token(TT_NEWLINE, null, this.pos, null))
        this.advance()
      }
      else if( DIGITS.includes(this.current_char))
        tokens.push(this.make_number())
      else if( LETTERS.includes(this.current_char))
        tokens.push(this.make_identifier())
      else if( this.current_char == '"')
        tokens.push(this.make_string())
      else if( this.current_char == '+')
      {
        tokens.push(new Token(TT_PLUS, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '-')
        tokens.push(this.make_minus_or_arrow())
      else if( this.current_char == '*')
      {
        tokens.push(new Token(TT_MUL, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '/')
      {
        tokens.push(new Token(TT_DIV, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '^')
      {
        tokens.push(new Token(TT_POW, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '(')
      {
        tokens.push(new Token(TT_LPAREN, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == ')')
      {
        tokens.push(new Token(TT_RPAREN, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '[')
      {
        tokens.push(new Token(TT_LSQUARE, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == ']')
      {
        tokens.push(new Token(TT_RSQUARE, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '!')
      {
        let { token, error } = this.make_not_equals()
        
        if(error)
        {
           let token = empty_tokens;
           return { token, error }
        }
        tokens.push(token)
      }
      else if( this.current_char == '=')
        tokens.push(this.make_equals())
      else if( this.current_char == '<')
        tokens.push(this.make_less_than())
      else if( this.current_char == '>')
        tokens.push(this.make_greater_than())
      else if( this.current_char == ',')
      {
        tokens.push(new Token(TT_COMMA, null,this.pos, null))
        this.advance()
      }
      else
      {
        let pos_start = this.pos.copy()
        let char = this.current_char
        this.advance()
        let error = new IllegalCharError(pos_start, this.pos , "'" + char + "'") ;
        let token = empty_tokens;
        return { token, error }
      }
    }    

    tokens.push(new Token(TT_EOF, null, this.pos, null))
    let error = null;
    return { tokens, error }
  }

  make_number()
  {
    var num_str = ''
    var dot_count = 0
    var pos_start = this.pos.copy()


    while(this.current_char != null && (DIGITS + '.').includes(this.current_char ) )
    {
      if(this.current_char == '.')
      {
        if(dot_count == 1)
          break
        dot_count += 1
      }
      num_str += this.current_char

      this.advance()

    }
    
   if(dot_count == 0)
      return new Token(TT_INT, parseInt(num_str), pos_start, this.pos)
    else
     return new Token(TT_FLOAT, parseFloat(num_str), pos_start, this.pos)
  }

  make_string()
  {
    let string = ''
    let pos_start = this.pos.copy()
    let escape_character = false
    this.advance()

    let escape_characters = {
      'n': '\n',
      't': '\t'
    }

    while(this.current_char != null && (this.current_char != '"' || escape_character))
    {
      if(escape_character)
        string += escape_characters.get(this.current_char, this.current_char)
      else
      {
        if(this.current_char == '\\')
          escape_character = true
        else
          string += this.current_char
      }
      
      this.advance()

      escape_character = false
    }
    
    this.advance()
    return new Token(TT_STRING, string, pos_start, this.pos)
  }

  make_identifier()
  {
    let id_str = ''
    let pos_start = this.pos.copy()

    while(this.current_char != null &&  (LETTERS_DIGITS + '_').includes(this.current_char ))
    {
      id_str += this.current_char
      this.advance()
    }
    
    let tok_type;

    if( KEYWORDS.includes(id_str) )
    {
      tok_type = TT_KEYWORD
    }
    else
    {
      tok_type = TT_IDENTIFIER
    }
    return new Token(tok_type, id_str, pos_start, this.pos)
  }

  make_minus_or_arrow()
  {
    let tok_type = TT_MINUS
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '>')
    {
      this.advance()
      tok_type = TT_ARROW
    }

    return new Token(tok_type, null, pos_start, this.pos)
  }

  make_not_equals()
  {
    let pos_start = this.pos.copy()
    this.advance()
    
    
    if(this.current_char == '=')
    {
      this.advance()
      let token = new Token(TT_NE, null, pos_start, this.pos);
      let error = null
      return { token, error}
    }
    this.advance()
    let token = null
    let error = new ExpectedCharError(pos_start, this.pos, "'=' ( after '!' )")
    return { token, error } 
  }
  
  make_equals()
  {
    let tok_type = TT_EQ
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '=')
    {
      this.advance()
      tok_type = TT_EE
    }
    
    return new Token(tok_type, null, pos_start, this.pos)
  }

  make_less_than()
  {
    let tok_type = TT_LT
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '=')
    {
      this.advance()
      tok_type = TT_LTE
    }
    
    return new Token(tok_type, null, pos_start, this.pos)
  }

  make_greater_than()
  {
    let tok_type = TT_GT
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '=')
    {
      this.advance()
      tok_type = TT_GTE
    }
    
    return new Token(tok_type, null, pos_start, this.pos)
  }

  skip_comment()
  {
    this.advance()

    while(this.current_char != '\n')
      this.advance()

    this.advance()
  }
}



//#######################################
//# NODES
//#######################################

class NumberNode
{
  constructor(tok)
  {
    this.tok = tok

    this.pos_start = this.tok.pos_start
    this.pos_end = this.tok.pos_end
    this.class_name = "NumberNode"
  }
  
  repr()
  {
    return this.tok.toString()
  }
}
class StringNode
{
  constructor(tok)
  {
    this.tok = tok

    this.pos_start = this.tok.pos_start
    this.pos_end = this.tok.pos_end
    
    this.class_name = "StringNode"
    

  }
  
  repr()
  {
    return this.tok.toString()
  }
}

class ListNode
{
  constructor(element_nodes, pos_start, pos_end)
  {
    this.element_nodes = element_nodes

    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "ListNode"
    
  }
}

class VarAccessNode
{
  constructor(var_name_tok)
  {
    this.var_name_tok = var_name_tok

    this.pos_start = this.var_name_tok.pos_start
    this.pos_end = this.var_name_tok.pos_end
    
    this.class_name = "VarAccessNode"
    

  }
}
class VarAssignNode
{
  constructor(var_name_tok, value_node)
  {
    this.var_name_tok = var_name_tok
    this.value_node = value_node

    this.pos_start = this.var_name_tok.pos_start
    this.pos_end = this.value_node.pos_end
    this.class_name = "VarAssignNode"
  }
}
class BinOpNode
{
  constructor(left_node, op_tok, right_node)
  {
    this.left_node = left_node
    this.op_tok = op_tok
    this.right_node = right_node

    this.pos_start = this.left_node.pos_start
    this.pos_end = this.right_node.pos_end
    this.class_name = "BinOpNode"
  }
  
  repr()
  {
    return '('+this.left_node.toString() + ',' + this.op_tok.toString() + ',' + this.right_node.toString() + ')'
  }
}
class UnaryOpNode
{
  constructor(op_tok, node)
  {
    this.op_tok = op_tok
    this.node = node

    this.pos_start = this.op_tok.pos_start
    this.pos_end = node.pos_end
    
    this.class_name = "UnaryOpNode"
  }
  
  repr()
  {
    return '('+this.op_tok.toString() + ',' +  this.node.toString()+')'
  }
}

class IfNode
{
  constructor(cases, else_case)
  {
    this.cases = cases
    this.else_case = else_case


    this.pos_start = this.cases[0].condition.pos_start
    if (this.else_case!=null) 
    {
      this.pos_end = ( this.else_case.expr || this.cases[this.cases.length - 1].condition ).pos_end
    }
    else
    {
      this.pos_end = this.cases[this.cases.length - 1].condition.pos_end
    }

    this.class_name = "IfNode"
  }
}

class ForNode
{
  constructor(var_name_tok, start_value_node, end_value_node, step_value_node, body_node, should_return_null)
  {
    this.var_name_tok = var_name_tok
    this.start_value_node = start_value_node
    this.end_value_node = end_value_node
    this.step_value_node = step_value_node
    this.body_node = body_node
    this.should_return_null = should_return_null

    this.pos_start = this.var_name_tok.pos_start
    this.pos_end = this.body_node.pos_end
    
    this.class_name = "ForNode"
  }
}

class WhileNode
{
  constructor(condition_node, body_node, should_return_null)
  {
    this.condition_node = condition_node
    this.body_node = body_node
    this.should_return_null = should_return_null

    this.pos_start = this.condition_node.pos_start
    this.pos_end = this.body_node.pos_end
    
    this.class_name = "WhileNode"
  } 
}

class FuncDefNode
{
  constructor(var_name_tok, arg_name_toks, body_node, should_auto_return)
  {
    this.var_name_tok = var_name_tok
    this.arg_name_toks = arg_name_toks
    this.body_node = body_node
    this.should_auto_return = should_auto_return

    if(this.var_name_tok)
      this.pos_start = this.var_name_tok.pos_start
    else if( this.arg_name_toks.length > 0)
      this.pos_start = this.arg_name_toks[0].pos_start
    else
      this.pos_start = this.body_node.pos_start

    this.pos_end = this.body_node.pos_end
    
    this.class_name = "FuncDefNode"
  }
}

class CallNode
{
  constructor(node_to_call, arg_nodes)
  {
    this.node_to_call = node_to_call
    this.arg_nodes = arg_nodes

    this.pos_start = this.node_to_call.pos_start

    if(this.arg_nodes.length > 0)
      this.pos_end = this.arg_nodes[this.arg_nodes.length - 1].pos_end
    else
      this.pos_end = this.node_to_call.pos_end
      
    this.class_name = "CallNode"
  }
}

class ReturnNode
{
  constructor(node_to_return, pos_start, pos_end)
  {
    this.node_to_return = node_to_return

    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "ReturnNode"
  }
}

class ContinueNode
{
  constructor(pos_start, pos_end)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "ContinueNode"
  }
}

class BreakNode
{
  constructor(pos_start, pos_end)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "BreakNode"
  }
}




//#######################################
//# PARSE RESULT
//#######################################

class ParseResult
{
  constructor()
  {
    this.error = null
    this.node = null
    this.last_registered_advance_count = 0
    this.advance_count = 0
    this.to_reverse_count = 0
    
    this.class_name = "ParseResult"
  }
  
  register_advancement()
  {
    this.last_registered_advance_count = 1
    this.advance_count += 1
  }
  
  register(res)
  {
    this.last_registered_advance_count = res.advance_count
    this.advance_count += res.advance_count
    if(res.error)
      this.error = res.error
    return res.node
  }
  
  try_register(res)
  {
    if(res.error)
    {
      this.to_reverse_count = res.advance_count
      return null
    }
    return this.register(res)
  }
  
  success(node)
  {
    this.node = node
    return this
  }
  
  failure(error)
  {
    if( !this.error || this.last_registered_advance_count == 0)
      this.error = error
    return this
  }
}



//#######################################
//# PARSER
//#######################################

class Parser
{
  constructor(tokens)
  {
    this.tokens = tokens
    this.tok_idx = -1
    this.advance()
    
    this.class_name = "Parser"
    
  }
  
  advance()
  {
    this.tok_idx += 1
    this.update_current_tok()
    return this.current_tok
  }
  
  reverse(amount=1)
  {
    this.tok_idx -= amount
    this.update_current_tok()
    return this.current_tok
  }
  
  update_current_tok()
  {
    if(this.tok_idx >= 0 && this.tok_idx < this.tokens.length)
      this.current_tok = this.tokens[this.tok_idx]
      
  }
  
  parse()
  {

    let res = this.statements()

    if( !res.error && this.current_tok.type != TT_EOF)
    {

      return res.failure( new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "[Token] cannot appear after previous [tokens], Expected NEWLINE ';' or 'VAR', 'IF', 'FOR', 'FUN', int, float, identifier, '+', '-', '(', '[' or 'NOT' "
      ))
    }

    return res
  }

  //###################################

  statements()
  {

    let res = new ParseResult()
    var statements = []
    let pos_start = this.current_tok.pos_start.copy()

    while(this.current_tok.type == TT_NEWLINE)
    {
      res.register_advancement()
      this.advance()
    }
    
    let statement = res.register(this.statement())

    if(res.error) 
      return res

    statements.push(statement)
    let more_statements = true

    while(true)
    {
      let newline_count = 0
      while(this.current_tok.type == TT_NEWLINE)
      {
        res.register_advancement()
        this.advance()
        newline_count += 1
      }
      if(newline_count == 0)
        more_statements = false

      if(!more_statements) break
      statement = res.try_register(this.statement())

      if(!statement)
      {
        this.reverse(res.to_reverse_count)
        more_statements = false
        continue
      }
      statements.push(statement)
    }
    

    return res.success(new ListNode(
      statements,
      pos_start,
      this.current_tok.pos_end.copy()
    ))
  }
  
  statement()
  {
    let res = new ParseResult()
    let pos_start = this.current_tok.pos_start.copy()

    if(this.current_tok.matches(TT_KEYWORD, 'RETURN'))
    {
      res.register_advancement()
      this.advance()

      let expr = res.try_register(this.expr())
      if(! expr)
        this.reverse(res.to_reverse_count)
      return res.success(new ReturnNode(expr, pos_start, this.current_tok.pos_start.copy()))
    }
    if(this.current_tok.matches(TT_KEYWORD, 'CONTINUE'))
    {
      res.register_advancement()
      this.advance()
      
      return res.success(new ContinueNode(pos_start, this.current_tok.pos_start.copy()))
    }
      
    if(this.current_tok.matches(TT_KEYWORD, 'BREAK'))
    {
      res.register_advancement()
      this.advance()
      
      return res.success(new BreakNode(pos_start, this.current_tok.pos_start.copy()))
    }
    
    let expr = res.register(this.expr())


    if(res.error)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'RETURN', 'CONTINUE', 'BREAK', 'VAR', 'IF', 'FOR', 'WHILE', 'FUN', int, float, identifier, '+', '-', '(', '[' or 'NOT'"
      ))
    return res.success(expr)
  }
  
  expr()
  {
    let res = new ParseResult()

    if(this.current_tok.matches(TT_KEYWORD, 'VAR'))
    {

      res.register_advancement()
      this.advance()

      if(this.current_tok.type != TT_IDENTIFIER)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected identifier"
        ))

      let var_name = this.current_tok
      res.register_advancement()
      this.advance()
      
      if(this.current_tok.type != TT_EQ)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected '='"
        ))
      
      res.register_advancement()
      this.advance()
      
      let expr = res.register(this.expr())
      if(res.error) return res
      
      return res.success(new VarAssignNode(var_name, expr))
    }
    

    let ops_AND = 'AND';
    
    let ops_OR = 'OR';
    
    let ops = { ops_AND, ops_OR };
    let node = res.register(this.bin_op(  ()=>this.comp_expr(), ops ))

    if(res.error)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'VAR', 'IF', 'FOR', 'FUN', int, float, identifier, '+', '-', '(', '[' or 'NOT'"
      ))

    return res.success(node)
  }
  
  comp_expr()
  {
    let res = new ParseResult()

    if(this.current_tok.matches(TT_KEYWORD, 'NOT'))
    {
      let op_tok = this.current_tok
      res.register_advancement()
      this.advance()

      let node = res.register(this.comp_expr())
      if(res.error) return res
      return res.success(new UnaryOpNode(op_tok, node))
    }
    
    let ops_TT_EE = TT_EE;
    let ops_TT_NE = TT_NE;
    let ops_TT_LT = TT_LT;
    let ops_TT_GT = TT_GT;
    let ops_TT_LTE = TT_LTE;
    let ops_TT_GTE = TT_GTE;
    
    let ops = {ops_TT_EE,ops_TT_NE,ops_TT_LT,ops_TT_GT,ops_TT_LTE,ops_TT_GTE};
    
    
    let node = res.register(this.bin_op(  ()=>this.arith_expr(), ops ))
    
    if(res.error)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected int, float, identifier, '+', '-', '(', '[', 'IF',  'WHILE', 'FUN' or 'NOT'"
      ))

    return res.success(node)
  }

  arith_expr()
  {
 
    let ops_TT_PLUS = TT_PLUS;
    let ops_TT_MINUS = TT_MINUS;
    
    let ops = {ops_TT_PLUS,ops_TT_MINUS}
    
    return this.bin_op(  ()=>this.term(), ops)
  }
  
  term()
  {
    let ops_TT_MUL = TT_MUL;
    let ops_TT_DIV = TT_DIV;
    let ops_TT_ARROW = TT_ARROW;
    
    let ops = {ops_TT_MUL,ops_TT_DIV,ops_TT_ARROW}
    
    return this.bin_op(  ()=>this.factor(), ops)
  }
  
  factor()
  {
    let res = new ParseResult()
    let tok = this.current_tok
    
    if(tok.type == TT_PLUS || tok.type == TT_MINUS)
    {
      res.register_advancement()
      this.advance()
      let factor = res.register(this.factor())
      if(res.error) return res
      return res.success(new UnaryOpNode(tok, factor))
    }
    
    return this.power()
  }
  
  power()
  {
    
    let ops_keyword = TT_POW;
    let ops_value = null;
    let ops = {ops_keyword,ops_value}
    return this.bin_op( ()=>this.call(), ops, ()=>this.factor() )
  }
  
  call()
  {
    
    let res = new ParseResult()
    let atom = res.register(this.atom())
    if(res.error) return res

    if(this.current_tok.type == TT_LPAREN)
    {
      res.register_advancement()
      this.advance()
      var arg_nodes = []

      if(this.current_tok.type == TT_RPAREN)
      {
        res.register_advancement()
        this.advance()
      }
      else
      {
        arg_nodes.push(res.register(this.expr()))
        if(res.error)
          return res.failure(new InvalidSyntaxError(
            this.current_tok.pos_start, this.current_tok.pos_end,
            "Expected ')', 'VAR', 'IF', 'FOR', 'WHILE', 'FUN', int, float, identifier, '+', '-', '(', '[' or 'NOT'"
          ))

        while(this.current_tok.type == TT_COMMA)
        {
          res.register_advancement()
          this.advance()

          arg_nodes.push(res.register(this.expr()))
          if(res.error) return res
        }
        
        if(this.current_tok.type != TT_RPAREN)
          return res.failure(new InvalidSyntaxError(
            this.current_tok.pos_start, this.current_tok.pos_end,
            "Expected ',' or ')'"
          ))

        res.register_advancement()
        this.advance()
      }
      return res.success(new CallNode(atom, arg_nodes))
    }  
    return res.success(atom)
  }
  
  atom()
  {
    let res = new ParseResult()
    let tok = this.current_tok

    if(tok.type == TT_INT || tok.type == TT_FLOAT)
    {
      res.register_advancement()
      this.advance()
      return res.success(new NumberNode(tok))
    }
    else if(tok.type == TT_STRING)
    {
      res.register_advancement()
      this.advance()
      

      
      return res.success(new StringNode(tok))
    }
    else if(tok.type == TT_IDENTIFIER)
    {
      res.register_advancement()
      this.advance()
      return res.success(new VarAccessNode(tok))
    }
    else if(tok.type == TT_LPAREN)
    {
      res.register_advancement()
      this.advance()
      let expr = res.register(this.expr())
      if(res.error) return res
      if(this.current_tok.type == TT_RPAREN)
      {
        res.register_advancement()
        this.advance()
        return res.success(expr)
      }
      else
      {
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected ')'"
        ))
      }
    }
    else if(tok.type == TT_LSQUARE)
    {
      let list_expr = res.register(this.list_expr())
      if(res.error) return res
      return res.success(list_expr)
    }
    else if(tok.matches(TT_KEYWORD, 'IF'))
    {
      let if_expr = res.register(this.if_expr())
      if(res.error) return res
      return res.success(if_expr)
    }
    else if(tok.matches(TT_KEYWORD, 'FOR'))
    {
      let for_expr = res.register(this.for_expr())
      if(res.error) return res
      return res.success(for_expr)
    }
    else if(tok.matches(TT_KEYWORD, 'WHILE'))
    {
      let while_expr = res.register(this.while_expr())
      if(res.error) return res
      return res.success(while_expr)
    }
    else if(tok.matches(TT_KEYWORD, 'FUN'))
    {
      let func_def = res.register(this.func_def())
      if(res.error) return res
      return res.success(func_def)
    }
    return res.failure(new InvalidSyntaxError(
      tok.pos_start, tok.pos_end,
      "Expected int, float, identifier, '+', '-', '(', '[', IF', 'FOR', 'WHILE', 'FUN'"
    ))
  }
  
  list_expr()
  {
    let res = new ParseResult()
    var element_nodes = []
    let pos_start = this.current_tok.pos_start.copy()

    if(this.current_tok.type != TT_LSQUARE)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected '['"
      ))

    res.register_advancement()
    this.advance()

    if(this.current_tok.type == TT_RSQUARE)
    {
      res.register_advancement()
      this.advance()
    }
    else
    {
      element_nodes.push(res.register(this.expr()))
      if(res.error)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected ']', 'VAR', 'IF', 'FOR', 'WHILE', 'FUN', int, float, identifier, '+', '-', '(', '[' or 'NOT'"
        ))

      while(this.current_tok.type == TT_COMMA)
      {
        res.register_advancement()
        this.advance()

        element_nodes.push(res.register(this.expr()))
        if(res.error) return res
      }
      if(this.current_tok.type != TT_RSQUARE)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected ',' or ']'"
        ))

      res.register_advancement()
      this.advance()
    }
    return res.success(new ListNode(
      element_nodes,
      pos_start,
      this.current_tok.pos_end.copy()
    ))
  }
  
  if_expr()
  {
    let res = new ParseResult()
    let all_cases = res.register(this.if_expr_cases('IF'))
    if(res.error) return res
    let { cases, else_case } = all_cases

    
    return res.success(new IfNode(cases, else_case))
  }
  
  if_expr_b()
  {
    return this.if_expr_cases('ELIF')
  }
  
  if_expr_c()
  {
    let res = new ParseResult()
    var else_case = null

    if(this.current_tok.matches(TT_KEYWORD, 'ELSE'))
    {
      res.register_advancement()
      this.advance()

      if(this.current_tok.type == TT_NEWLINE)
      {
        res.register_advancement()
        this.advance()

        let statements = res.register(this.statements())
        if(res.error) return res
        
        let expr = statements;
        let should_return_null = true;
        let else_case = {expr, should_return_null}

        if(this.current_tok.matches(TT_KEYWORD, 'END'))
        {
          res.register_advancement()
          this.advance()
        }
        else
        {
          return res.failure(new InvalidSyntaxError(
            this.current_tok.pos_start, this.current_tok.pos_end,
            "Expected 'END'"
          ))
        }
      }
      else
      {
        let expr = res.register(this.statement())
        if(res.error) return res
        let should_return_null = false
        else_case = {expr, should_return_null}
      }
    }
    
    return res.success(else_case)
  }
  
  if_expr_b_or_c()
  {
    let res = new ParseResult()
    var new_cases = []
    var else_case = null

    if(this.current_tok.matches(TT_KEYWORD, 'ELIF'))
    {
      let all_cases = res.register(this.if_expr_b())
      if(res.error) return res
      var { cases, else_case } = all_cases
      new_cases = cases;
    }
    else
    {

      var else_case = res.register(this.if_expr_c())
      
      if(res.error) return res
    }
    
    return res.success({new_cases, else_case})
  }
  
  if_expr_cases(case_keyword)
  {
    
    var res = new ParseResult()
    var cases = []
    var else_case = null

    if(! this.current_tok.matches(TT_KEYWORD, case_keyword))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected '${case_keyword}'"
      ))

    res.register_advancement()
    this.advance()

    let condition = res.register(this.expr())
    if(res.error) return res
    
    if(! this.current_tok.matches(TT_KEYWORD, 'THEN'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'THEN'"
      ))

    res.register_advancement()
    this.advance()

    if(this.current_tok.type == TT_NEWLINE)
    {
      
      res.register_advancement()
      this.advance()

      let statements = res.register(this.statements())

      if(res.error) return res

      let expr = statements;
      let should_return_null = true;
      cases.push({condition, expr, should_return_null})
     
      
      if(this.current_tok.matches(TT_KEYWORD, 'END'))
      {
        res.register_advancement()
        this.advance()
      }
      else
      {
        let all_cases = res.register(this.if_expr_b_or_c())
       
        if(res.error) return res
        var { new_cases, else_case } = all_cases
        cases.push(...new_cases)
        
    
      }
    }
    else
    {

      
      let expr = res.register(this.statement())
      if(res.error) return res
      let should_return_null = false;
      cases.push({condition, expr, should_return_null})
      

      let all_cases = res.register(this.if_expr_b_or_c())
      if(res.error) return res
      var {new_cases, else_case} = all_cases

      cases.push(...new_cases)

      
      
    }

    return res.success({cases, else_case})
  }

  for_expr()
  {
    let res = new ParseResult()

    if(! this.current_tok.matches(TT_KEYWORD, 'FOR'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'FOR'"
      ))

    res.register_advancement()
    this.advance()

    if(this.current_tok.type != TT_IDENTIFIER)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected identifier"
      ))

    let var_name = this.current_tok
    res.register_advancement()
    this.advance()

    if(this.current_tok.type != TT_EQ)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected '='"
      ))
    
    res.register_advancement()
    this.advance()

    let start_value = res.register(this.expr())
    if(res.error) return res

    
    if(! this.current_tok.matches(TT_KEYWORD, 'TO'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'TO'"
      ))
    
    res.register_advancement()
    this.advance()
    


    let end_value = res.register(this.expr())
    if(res.error) return res

    let step_value ;
    if(this.current_tok.matches(TT_KEYWORD, 'STEP'))
    {
      res.register_advancement()
      this.advance()

      step_value = res.register(this.expr())
      if(res.error) return res
    }
    else
    {
      step_value = null
    }


    if(! this.current_tok.matches(TT_KEYWORD, 'THEN'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'THEN'"
      ))

    res.register_advancement()
    this.advance()

    if(this.current_tok.type == TT_NEWLINE)
    {
      res.register_advancement()
      this.advance()

      var body = res.register(this.statements())
      if(res.error) return res

      if(! this.current_tok.matches(TT_KEYWORD, 'END'))
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected 'END'"
        ))

      res.register_advancement()
      this.advance()

      return res.success(new ForNode(var_name, start_value, end_value, step_value, body, true))
    }
    var body = res.register(this.statement())
    if(res.error) return res

    return res.success(new ForNode(var_name, start_value, end_value, step_value, body, false))
  }

  while_expr()
  {
    let res = new ParseResult()

    if(! this.current_tok.matches(TT_KEYWORD, 'WHILE'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'WHILE'"
      ))

    res.register_advancement()
    this.advance()

    let condition = res.register(this.expr())
    if(res.error) return res

    if(! this.current_tok.matches(TT_KEYWORD, 'THEN'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'THEN'"
      ))

    res.register_advancement()
    this.advance()

    if(this.current_tok.type == TT_NEWLINE)
    {
      res.register_advancement()
      this.advance()

      var body = res.register(this.statements())
      if(res.error) return res

      if(! this.current_tok.matches(TT_KEYWORD, 'END'))
      {
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected 'END'"
        ))
      }
      res.register_advancement()
      this.advance()

      return res.success(new WhileNode(condition, body, true))
    }
    var body = res.register(this.statement())
    if(res.error) return res

    return res.success(new WhileNode(condition, body, false))
  }

  func_def()
  {
    let res = new ParseResult()

    if(! this.current_tok.matches(TT_KEYWORD, 'FUN'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'FUN'"
      ))

    res.register_advancement()
    this.advance()

    var var_name_tok 
    
    if(this.current_tok.type == TT_IDENTIFIER)
    {
      var_name_tok = this.current_tok
      res.register_advancement()
      this.advance()
      if(this.current_tok.type != TT_LPAREN)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected '('"
        ))
    }
    else
    {
      var_name_tok = null
      if(this.current_tok.type != TT_LPAREN)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected identifier or '('"
        ))
    }
    res.register_advancement()
    this.advance()
    var arg_name_toks = []

    if(this.current_tok.type == TT_IDENTIFIER)
    {
      arg_name_toks.push(this.current_tok)
      res.register_advancement()
      this.advance()
      
      while(this.current_tok.type == TT_COMMA)
      {
        res.register_advancement()
        this.advance()

        if(this.current_tok.type != TT_IDENTIFIER)
          return res.failure(new InvalidSyntaxError(
            this.current_tok.pos_start, this.current_tok.pos_end,
            "Expected identifier"
          ))

        arg_name_toks.push(this.current_tok)
        res.register_advancement()
        this.advance()
      }
      
      if(this.current_tok.type != TT_RPAREN)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected ',' or ')'"
        ))
    }
    else
    {
      if(this.current_tok.type != TT_RPAREN)
        return res.failure(new InvalidSyntaxError(
          this.current_tok.pos_start, this.current_tok.pos_end,
          "Expected identifier or ')'"
        ))
    }
    res.register_advancement()
    this.advance()

    if(this.current_tok.type == TT_ARROW)
    {
      res.register_advancement()
      this.advance()

      var body = res.register(this.expr())
      if(res.error) return res

      return res.success(new FuncDefNode(
        var_name_tok,
        arg_name_toks,
        body,
        true
      ))
    }
    
    if(this.current_tok.type != TT_NEWLINE)
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected '->' or NEW LINE"
      ))

    res.register_advancement()
    this.advance()

    var body = res.register(this.statements())
    if(res.error) return res

    if(! this.current_tok.matches(TT_KEYWORD, 'END'))
      return res.failure(new InvalidSyntaxError(
        this.current_tok.pos_start, this.current_tok.pos_end,
        "Expected 'END'"
      ))

    res.register_advancement()
    this.advance()
    
    return res.success(new FuncDefNode(
      var_name_tok,
      arg_name_toks,
      body,
      false
    ))
  }

  //###################################

  bin_op(func_a, ops, func_b=null)
  {
    if(func_b == null)
      func_b = func_a
    

    var res = new ParseResult()
    var left = res.register(func_a())
    if(res.error) return res
    

    if(ops!=null)
    {
     
      
      while( Object.values(ops).includes(this.current_tok.type) || (Object.values(ops).includes(this.current_tok.value) && (this.current_tok.value != null ) ) )
      {
        
        let op_tok = this.current_tok
        
        res.register_advancement()
        this.advance()
        
        let right = res.register(func_b())
        
        if(res.error) return res
        left = new BinOpNode(left, op_tok, right)
        
      }
    }
    else
    { 
        res.error = "op is null";
        return res
    }
    
    return res.success(left)
  }
}



//#######################################
//# RUNTIME RESULT
//#######################################

class RTResult
{
  constructor()
  {
    this.reset()
    this.class_name = "RTResult"
  }
  
  reset()
  {
    this.value = null
    this.error = null
    this.func_return_value = null
    this.loop_should_continue = false
    this.loop_should_break = false
  }
  
  register(res)
  {
    this.error = res.error
    this.func_return_value = res.func_return_value
    this.loop_should_continue = res.loop_should_continue
    this.loop_should_break = res.loop_should_break
    return res.value
  }
  
  success(value)
  {
    this.reset()
    this.value = value
    return this
  }
  
  success_return(value)
  {
    this.reset()
    this.func_return_value = value
    return this
  }
   
  success_continue()
  {
    this.reset()
    this.loop_should_continue = true
    return this
  }
  
  success_break()
  {
    
    this.reset()
    this.loop_should_break = true
    return this
  }
  
  failure(error)
  {
    this.reset()
    this.error = error
    return this
  }
  
  should_return()
  {
    //# Note: this will allow you to continue and break outside the current function
    return (
      this.error ||
      this.func_return_value ||
      this.loop_should_continue ||
      this.loop_should_break
    )
  }
}



//#######################################
//# VALUES
//#######################################

class Value
{
  constructor()
  {
    this.set_pos()
    this.set_context()
    this.class_name = "Value"
  }
  
  set_pos(pos_start=null, pos_end=null)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    return this
  }
  
  set_context(context=null)
  {
    this.context = context
    
    return this
  }
  
  added_to(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }
  
  subbed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  multed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  dived_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  arrowed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  powed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_eq(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_ne(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_lt(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_gt(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_lte(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_gte(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  anded_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  ored_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  notted(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  execute(args)
  {
    let result = null;
    return new RTResult().failure(this.illegal_operation())
  }

  copy()
  {
    throw 'No copy method defined'
  }

  is_true()
  {
    return false
  }
  
  illegal_operation(other=null)
  {
    if( ! other) other = this
    return new RTError(
      this.pos_start, other.pos_end,
      'illegal operation ',
      this.context
    )
  }
}

class Number extends Value
{
  constructor(value)
  {
    super()
    this.value = value
    this.context = null
    
    this.class_name = "Number"

  }
  

  
  set_value(value)
  {
    this.value = value;
    return this
  }
  
  return_this()
  {
    return this;
  }
  
  added_to(other)
  {
    
    if( other instanceof Number )
    {
      
      let result = new Number(this.value + other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  subbed_by(other)
  {

    if( other instanceof Number )
    {
      let result = new Number(this.value - other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  multed_by(other)
  {

    if( other instanceof Number )
    {
      
      let result = new Number(this.value * other.value).set_context(this.context);
      let error = null;
      
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  dived_by(other)
  {
    
    if( other instanceof Number )
    {
      let result = null;
      if(other.value == 0)
      {
        let error =  new RTError(
          other.pos_start, other.pos_end,
          'dived by 0 error',
          this.context
        )
      
        return { result, error } 
      }

      
      result = new Number(this.value / other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }

  arrowed_by(other)
  {
    
    if( other instanceof Number )
    {
      let result = null;

      let error =  new RTError(
          other.pos_start, other.pos_end,
          'The Number is not support indexing',
          this.context
        )
      
      return { result, error } 



    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  powed_by(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value ** other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_eq(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value == other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_ne(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value != other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_lt(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value < other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_gt(other)
  {
    
    if( other instanceof Number )
    {
      let result = new Number(this.value > other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_lte(other)
  {
    
    if( other instanceof Number )
    {
      
      let result = new Number(this.value <= other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_gte(other)
  {
    
    if( other instanceof Number )
    {
      let result = new Number(this.value >= other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  anded_by(other)
  {
    
    if( other instanceof Number )
    {
      
      
      let result = new Number(this.value && other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  ored_by(other)
  {
    
    if( other instanceof Number )
    {
      
      let result = new Number(this.value || other.value).set_context(this.context);
      let error = null;
      return { result, error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  notted()
  {
    
    let result;
    let error = null;
    if( this.value == 0 )
    {
      result = new Number(1).set_context(this.context)
    }
    else
    {
      result = new Number(0).set_context(this.context)
    }
     
    return { result , error }
  }
  
  copy()
  {
    let copy = new Number(this.value)
    copy.set_pos(this.pos_start, this.pos_end)
    copy.set_context(this.context)
    return copy
  }
  
  is_true()
  {
    return this.value != 0
  }
  
  str()
  {
    return this.value.toString()
  }
  
  repr()
  {
    return this.value.toString()
  }
}



class String_complier extends Value
{
  constructor(value)
  {
    super()
    this.value = value
    this.context = null
  }
  
  set_pos(pos_start=null, pos_end=null)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    return this
  }
  
  set_context(context=null)
  {
    
    
    this.context = context
    
    return this
  }
  
  
  added_to(other)
  {
    
    if( other instanceof String_complier)
    {
      
      let result = new String_complier(this.value + other.value).set_context(this.context);
      let error = null;
      return { result , error}
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error}
    }
  }
  
  multed_by(other)
  {
    
    if(other instanceof Number)
    {
      var string_multed_by = "";
      for(let i = 0;i<other.value;i++)
      {
        string_multed_by += this.value;
      }

      let result = new String_complier(string_multed_by).set_context(this.context);
      let error = null;
      return { result , error}
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error}
    }
  }
  
  is_true()
  {
    return this.value.length > 0
  }
  
  copy()
  {
    let copy = new String_complier(this.value)
    copy.set_pos(this.pos_start, this.pos_end)
    copy.set_context(this.context)
    return copy
  }

  str()
  {
    return this.value.toString()
  }

  repr()
  {
    return this.value.toString()
  }
}

//#######################################
//# FUNCTION from VALUE
//#######################################

class BaseFunction extends Value
{
  constructor(name)
  {
    super()
    if(name)
    {
      this.name = name 
    }
    else
    {
      this.name = "<anonymous>"
    }
    
    //this.context = null
  }
  
  //set_pos(pos_start=null, pos_end=null)
  //{
  //  this.pos_start = pos_start
  //  this.pos_end = pos_end
  //  return this
  //}
  
  //set_context(context=null)
  //{
  //  this.context = context
  //  
  //  return this
  //}
  
  generate_new_context()
  {
    let new_context = new Context(this.name, this.context, this.pos_start)
    new_context.symbol_table = new SymbolTable(new_context.parent.symbol_table)
    return new_context
  }
  
  check_args(arg_names, args)
  {
    let res = new RTResult()

    if( args.length > arg_names.length )
    {
      return res.failure(new RTError(
        this.pos_start, this.pos_end,
        (args.length - arg_names.length).toString() + " too many VAR into function: " + this.name + "()",
        this.context
      ))
    }
    
    if(args.length < arg_names.length)
    {
      return res.failure(new RTError(
        this.pos_start, this.pos_end,
        (arg_names.length - args.length).toString() + " too few VAR into function: " + this.name + "()",
        this.context
      ))
    }
    
    return res.success(null)
  }
  
  populate_args(arg_names, args, exec_ctx)
  {
    for(let i=0;i<args.length;i++)
    {
      var arg_name = arg_names[i]
      var arg_value = args[i]
      arg_value.set_context(exec_ctx)
      exec_ctx.symbol_table.set(arg_name, arg_value)
    }
  }
  
  check_and_populate_args(arg_names, args, exec_ctx)
  {
    let res = new RTResult()
    
    
    
    res.register(this.check_args(arg_names, args))
    if(res.should_return()) return res
    this.populate_args(arg_names, args, exec_ctx)
    return res.success(null)
  }
}
  

//#######################################
//# Scoped Symbol Table
//#######################################

class VariableSymbol
{

  constructor(var_name, var_value)
  {
    this.name = var_name
    this.value = var_value
    
  }

}

class ScopedSymbolTable
{

  constructor(scope_name, scope_level, enclosing_scope=null)
  {
    this._symbols = {}
    this.scope_name = scope_name
    this.scope_level = scope_level
    this.enclosing_scope = enclosing_scope
    
  }

  insert(symbol)
  {
    //console.log('Insert: ' + symbol.name)
    this._symbols[symbol.name] = symbol

  }

  lookup(name)
  {
    var symbol = this._symbols[name]

    if ( symbol != null )
    {
      return symbol
    }

    if ( this.enclosing_scope  != null )
    {

      return this.enclosing_scope.lookup(name)
    }

  }            

}


var global_scope_table = {}

var global_scope = new ScopedSymbolTable('global', 1, null)

global_scope_table['global'] = global_scope

class Function extends BaseFunction
{
  constructor(name, body_node, arg_names, should_auto_return)
  {
    super(name);
    this.body_node = body_node
    this.arg_names = arg_names
    this.should_auto_return = should_auto_return
    
    this.context = null
    this.scope = new ScopedSymbolTable('function_default', 100, null)


    
  }
  
  set_scope( scope )
  {
    this.scope = scope
  }

  set_pos(pos_start=null, pos_end=null)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    return this
  }
  
  set_context(context=null)
  {
    this.context = context
    //console.log("===================Function.set_context()[start]===========================")
    //console.log(context);
    return this
  }
  
  execute(args)
  {
    let res = new RTResult()
    let interpreter = new Interpreter()
    let exec_ctx = this.generate_new_context()

    //console.log("==================execute(args)[start]=======================")
    //console.log(this.arg_names)
    //console.log(args)
    //console.log("==================execute(args)[end]=======================")
    res.register(this.check_and_populate_args(this.arg_names, args, exec_ctx))
    if(res.should_return()) return res



    //#print("==============Function_execute===================")
    //#print(self.name)
    //#print(self.scope)
    this.scope = global_scope_table[this.name]

//###################################################[ARGS Var insert]#########################################################3
    //#print("============[ARGS Var insert]===============")

    for(let i=0;i<args.length;i++)
    {
      var arg_name = this.arg_names[i]
      var arg_value = args[i]
      arg_value.set_context(exec_ctx)
      exec_ctx.symbol_table.set(arg_name, arg_value)
      //#print(self.current_scope)
      var var_symbol = new VariableSymbol(arg_name,arg_value)   
      this.scope.insert(var_symbol)
    }



//##############################################################################################################


    interpreter.get_global_scope(this.scope)

    ////console.log("================Function[body_node]=================")
    ////console.log(this.body_node)
    
    let value = res.register(interpreter.visit(this.body_node, exec_ctx))
    //console.log(value)
    
    if( res.should_return() && res.func_return_value == null) return res

    var should_return
    if(this.should_auto_return)
    {
      should_return = value
    }
    else
    {
      should_return = null
    }
    //ret_value = (value if this.should_auto_return else None) or res.func_return_value or Number.null
    let ret_value = (should_return) || res.func_return_value || new Number(0)
    return res.success(ret_value)
  }
  
  copy()
  {
    let copy = new Function(this.name, this.body_node, this.arg_names, this.should_auto_return)
    copy.set_context(this.context)
    copy.set_pos(this.pos_start, this.pos_end)
    return copy
  }
  
  repr()
  {
    return "<function " + this.name;
  }
}

class BuiltInFunction extends BaseFunction
{
  constructor(name)
  {
    super(name)
    this.execute_print_arg_names = ['value']
    this.execute_print_ret_arg_names = ['value']
    this.number_to_string_arg_names = ['value']
    this.execute_input_arg_names = []
    this.execute_input_int_arg_names = []
    this.execute_clear_arg_names = []
    this.execute_is_number_arg_names = ["value"]
    this.execute_is_string_arg_names = ["value"]
    this.execute_is_list_arg_names = ["value"]
    this.execute_is_function_arg_names = ["value"]
    this.execute_append_arg_names = ["list", "value"]
    this.execute_pop_arg_names = ["list"]
    this.execute_extend_arg_names = ["listA", "listB"]
    this.execute_len_arg_names = ["list"]
    this.execute_run_arg_names = ["fn"]
    this.execute_div_add_arg_names = ["div_id","value"]
    this.execute_function_add_arg_names = ["function"]
    this.execute_src_add_arg_names = ["function"]
    this.execute_wait_arg_names = ["time"]
    this.execute_function_bind_arg_names = ["div_id","event","function"]
    this.execute_function_run_arg_names = ["value"]

    this.execute_div_create_pre_with_id_arg_names = ["div_id","reference_id"]
    this.execute_div_create_post_with_id_arg_names = ["div_id","reference_id"]
    this.execute_div_create_child_pre_with_id_arg_names = ["div_id","parent_id"]
    this.execute_div_create_child_post_with_id_arg_names = ["div_id","parent_id"]

    this.execute_div_create_pre_with_class_arg_names = ["div_class","reference_class","array_id"]
    this.execute_div_create_post_with_class_arg_names = ["div_class","reference_class","array_id"]
    this.execute_div_create_child_pre_with_class_arg_names = ["div_class","parent_class","array_id"]
    this.execute_div_create_child_post_with_class_arg_names = ["div_class","parent_class","array_id"]


    this.execute_div_create_attribute_with_class_arg_names  = ["div_class","array_id","attribute","value"]
    this.execute_div_change_attribute_with_class_arg_names  = ["div_class","array_id","attribute","value"]
    this.execute_div_change_inner_html_with_class_arg_names = ["div_class","array_id","html_content"]
    this.execute_div_overwrite_style_with_class_arg_names = ["div_class","array_id","style"]
    this.execute_div_add_style_with_class_arg_names = ["div_class","array_id","style"]
    this.execute_div_add_inside_with_class_arg_names = ["div_class","array_id","child_element"]
    this.execute_div_remove_with_class_arg_names = ["div_class","array_id"]
    this.execute_event_add_with_class_arg_names = ["div_class","array_id","event","function"]
    this.execute_event_all_remove_with_class_arg_names = ["div_class","array_id"]

    this.execute_div_create_attribute_with_id_arg_names  = ["div_id","attribute","value"]
    this.execute_div_change_attribute_with_id_arg_names  = ["div_id","attribute","value"]
    this.execute_div_change_inner_html_with_id_arg_names = ["div_id","html_content"]
    this.execute_div_overwrite_style_with_id_arg_names = ["div_id","style"]
    this.execute_div_add_style_with_id_arg_names = ["div_id","style"]
    this.execute_div_add_inside_with_id_arg_names = ["div_id","child_element"]
    this.execute_div_remove_with_id_arg_names = ["div_id"]
    this.execute_event_add_with_id_arg_names = ["div_id","event","function"]
    this.execute_event_all_remove_with_id_arg_names = ["div_id"]

    
    this.print                  = null       
    this.print_ret              = null     
    this.number_to_string       = null       
    this.input                  = null             
    this.input_int              = null        
    this.clear                  = null             
    this.is_number              = null       
    this.is_string              = null        
    this.is_list                = null      
    this.is_function            = null      
    this.append                 = null      
    this.pop                    = null       
    this.extend                 = null      
    this.len                    = null      
    this.run                    = null      
    this.div_add                = null  
    this.function_add           = null 
    this.src_add                = null 
    this.wait                   = null 
    this.function_run           = null    

    this.div_create_pre_with_id                     = null  
    this.div_create_post_with_id                    = null 
    this.div_create_child_pre_with_id               = null  
    this.div_create_child_post_with_id              = null 

    this.div_create_pre_with_class                  = null  
    this.div_create_post_with_class                 = null 
    this.div_create_child_pre_with_class            = null  
    this.div_create_child_post_with_class           = null 

    this.div_create_attribute_with_class    = null 
    this.div_change_attribute_with_class    = null  
    this.div_change_inner_html_with_class   = null 
    this.div_overwrite_style_with_class     = null 
    this.div_add_style_with_class           = null  
    this.div_add_inside_with_class          = null 
    this.div_remove_with_class              = null  
    this.event_add_with_class               = null 
    this.event_all_remove_with_class        = null 

    this.div_create_attribute_with_id    = null 
    this.div_change_attribute_with_id    = null  
    this.div_change_inner_html_with_id   = null 
    this.div_overwrite_style_with_id     = null 
    this.div_add_style_with_id           = null  
    this.div_add_inside_with_id          = null 
    this.div_remove_with_id              = null  
    this.event_add_with_id               = null 
    this.event_all_remove_with_id        = null 

    //this.context = null
  }
  
  //set_pos(pos_start=null, pos_end=null)
  //{
  //  this.pos_start = pos_start
  //  this.pos_end = pos_end
  //  return this
  //}
  
  //set_context(context=null)
  //{
  //  this.context = context
  //  
  //  return this
  //}
  
  execute(args)
  {
    var res = new RTResult()
    var exec_ctx = this.generate_new_context()

    var method_name = "execute_"+this.name
    var method = this[method_name] || this.no_visit_method;
    
    if( method.name == "execute_print" )
    {
      
      res.register(this.check_and_populate_args(this.execute_print_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_print_ret" )
    {
            res.register(this.check_and_populate_args(this.execute_print_ret_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_number_to_string" )
    {
            res.register(this.check_and_populate_args(this.number_to_string_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_input" )
    {
            res.register(this.check_and_populate_args(this.execute_input_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_input_int" )
    {
            res.register(this.check_and_populate_args(this.execute_input_int_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_clear" )
    {
            res.register(this.check_and_populate_args(this.execute_clear_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_is_number" )
    {
            res.register(this.check_and_populate_args(this.execute_is_number_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_is_string" )
    {
            res.register(this.check_and_populate_args(this.execute_is_string_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_is_list" )
    {
            res.register(this.check_and_populate_args(this.execute_is_list_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_is_function" )
    {
            res.register(this.check_and_populate_args(this.execute_is_function_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_append" )
    {
            
            res.register(this.check_and_populate_args(this.execute_append_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_pop" )
    {
            res.register(this.check_and_populate_args(this.execute_pop_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_extend" )
    {
            res.register(this.check_and_populate_args(this.execute_extend_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_len" )
    {
            res.register(this.check_and_populate_args(this.execute_len_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_run" )
    {
            res.register(this.check_and_populate_args(this.execute_run_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_add" )
    {
            res.register(this.check_and_populate_args(this.execute_div_add_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_function_add" )
    {
            res.register(this.check_and_populate_args(this.execute_function_add_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_src_add" )
    {
            res.register(this.check_and_populate_args(this.execute_src_add_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_wait" )
    {
            res.register(this.check_and_populate_args(this.execute_wait_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_function_bind" )
    {
            res.register(this.check_and_populate_args(this.execute_function_bind_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_function_run" )
    {
            res.register(this.check_and_populate_args(this.execute_function_run_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_pre_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_pre_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_post_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_post_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_child_pre_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_child_pre_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_child_post_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_child_post_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_pre_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_pre_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_post_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_post_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_child_pre_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_child_pre_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_child_post_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_child_post_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_attribute_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_attribute_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_create_attribute_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_create_attribute_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_change_attribute_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_change_attribute_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_change_attribute_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_change_attribute_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_change_inner_html_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_change_inner_html_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_change_inner_html_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_change_inner_html_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_overwrite_style_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_overwrite_style_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_overwrite_style_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_overwrite_style_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_add_style_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_add_style_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_add_style_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_add_style_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_add_inside_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_add_inside_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_add_inside_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_add_inside_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_remove_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_div_remove_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_div_remove_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_div_remove_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_event_add_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_event_add_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_event_add_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_event_add_with_id_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_event_all_remove_with_class" )
    {
            res.register(this.check_and_populate_args(this.execute_event_all_remove_with_class_arg_names, args, exec_ctx))
    }
    else if( method.name == "execute_event_all_remove_with_id" )
    {
            res.register(this.check_and_populate_args(this.execute_event_all_remove_with_id_arg_names, args, exec_ctx))
    }


    if(res.should_return()) return res

   
        
    let return_value = res.register(method(exec_ctx))
    
    
    if(res.should_return()) return res
    
    return res.success(return_value)
    
  }
  
  no_visit_method(node, context)
  {
    throw 'No execute_' + this.name + 'method defined'
  }
  
  copy()
  {
    let copy = new BuiltInFunction(this.name)
    copy.set_context(this.context)
    copy.set_pos(this.pos_start, this.pos_end)
    return copy
  }
  
  repr()
  {
    return "<built-in function" + this.name
  }
  
  //#####################################

  execute_print(exec_ctx)
  {
    

    //let output_in_print =  output + "\n" + exec_ctx.symbol_table.get('value').value
    //setOutput(output_in_print)
    
    //Can not print List arary of like [1,2,3]
    output = "\n" + exec_ctx.symbol_table.get('value').value ;
    
    self.postMessage(output);

   
    return new RTResult().success(new Number(0))
  }
  
  execute_number_to_string(exec_ctx)
  {
    
    
    var number_object = exec_ctx.symbol_table.get('value');
    var number_to_string = new String_complier(number_object.value).set_context(number_object.context).set_pos(number_object.pos_start, number_object.pos_end);
    
    return new RTResult().success(number_to_string)
  }
  
  execute_print_ret(exec_ctx)
  {

    
    if(exec_ctx.symbol_table.get('value').value != 0 )
    {
        
        var js = exec_ctx.symbol_table.get('value').value;
  var Script = document.createElement("script");
  Script.type = "module";
  var ScriptText = document.createTextNode(js);
  Script.appendChild(ScriptText);
  document.body.appendChild(Script);

    
   
    }
    
    if(exec_ctx.symbol_table.get('value').value==0)
    {
       
       
       var nodes = document.getElementsByTagName("canvas");

  for (var i = 0, len = nodes.length; i != len; ++i) {
    nodes[0].parentNode.removeChild(nodes[0]);
  }

    }
  
    return new RTResult().success(exec_ctx.symbol_table.get('value'))
  }
  
  execute_input(exec_ctx)
  {
    let text // = input()
    return new RTResult().success(text.toString())
  }

  execute_input_int(exec_ctx)
  {
    while(true)
    {
      let text //= input()
      try
      {
        var number = parseInt(text)
        break
      }
      catch
      {
        //print( text + " must be an integer. Try again!")
      }
    }
    return new RTResult().success(new Number(number))
  }

  execute_clear(exec_ctx)
  {
    //os.system('cls' if os.name == 'nt' else 'cls') 
    return new RTResult().success(new Number(0))
    
  }

  execute_is_number(exec_ctx)
  {
    let is_number = exec_ctx.symbol_table.get("value") instanceof Number
    if(is_number)
    {
      return new RTResult().success(new Number(1))
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
  }

  execute_is_string(exec_ctx)
  {
    let is_number = exec_ctx.symbol_table.get("value") instanceof String_complier
    
    if(is_number)
    {
      return new RTResult().success(new Number(1))
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
  }

  execute_is_list(exec_ctx)
  {
    let is_number = exec_ctx.symbol_table.get("value") instanceof List
    
    if(is_number)
    {
      return new RTResult().success(new Number(1))
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
  }

  execute_is_function(exec_ctx)
  {
    let is_number = exec_ctx.symbol_table.get("value") instanceof BaseFunction
    
    if(is_number)
    {
      return new RTResult().success(new Number(1))
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
  }

  execute_append(exec_ctx)
  {
    
    let list_ = exec_ctx.symbol_table.get("list")
    let value = exec_ctx.symbol_table.get("value")
    

    if(! list_ instanceof List)
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "First argument must be list",
        exec_ctx
      ))
    }
    
    list_.elements.push(value)
    return new RTResult().success(new Number(0))
  }

  execute_pop(exec_ctx)
  {
    var list_ = exec_ctx.symbol_table.get("list")

    if(! list_ instanceof List)
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "First argument must be list",
        exec_ctx
      ))

    var element;
    try
    {
      element = list_.elements.pop()
    }
    catch
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        'Element at this index could not be removed from list because index is out of bounds',
        exec_ctx
      ))
    }
    return new RTResult().success(element)
  }

  execute_extend(exec_ctx)
  {
    let listA = exec_ctx.symbol_table.get("listA")
    let listB = exec_ctx.symbol_table.get("listB")

    if(! listA instanceof List)
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "First argument must be list",
        exec_ctx
      ))
    }
    
    if(! listB instanceof List)
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "Second argument must be list",
        exec_ctx
      ))
    }
    
    listA.elements.push(...listB.elements)
    return new RTResult().success(listA)
  }

  execute_len(exec_ctx)
  {
    let list_ = exec_ctx.symbol_table.get("list")

    if( ! list_ instanceof List)
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "Argument must be list",
        exec_ctx
      ))
    }
    
    return new RTResult().success( new Number(list_.elements.length))
  }

  execute_run(exec_ctx)
  {
    let fn = exec_ctx.symbol_table.get("fn")

    if(! fn instanceof String_complier)
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "Second argument must be string",
        exec_ctx
      ))
    }
    
    fn = fn.value
    
    let script;
    try
    {
      //with open(fn, "r") as f:
      //  script = f.read()
    }
    catch
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "Failed to load scrip ["+fn+"]"+"\n",
        exec_ctx
      ))
    } 
    
    let { value_object, error_object } = run(fn, script)
    
    if(error_object)
    {
      return new RTResult().failure(new RTError(
        this.pos_start, this.pos_end,
        "Failed to load scrip ["+ fn + "] " +"\n" +
        error_object.as_string(),
        exec_ctx
      ))
    }
    
    return new RTResult().success(new Number(0))
  }
  
  execute_div_add(exec_ctx)
  {

    //var div = document.createElement("div");
    //div.innerHTML = "<p>"+exec_ctx.symbol_table.get('value').value+"</p>";
    //document.body.append(div);
    //document.body.prepend(div);
    

    
    
    if( exec_ctx.symbol_table.get('value').value != 0 && typeof exec_ctx.symbol_table.get('value').value == 'string')
    {
      var div_id =  exec_ctx.symbol_table.get("div_id").value;
      
      var div = document.createElement("div");
      div.setAttribute("id",div_id.toString())
      //div.innerHTML = "<div " + "id=" + "'" + div_id.toString() + "'" + ">"+exec_ctx.symbol_table.get('value').value+"</div>";
      div.innerHTML = exec_ctx.symbol_table.get('value').value;
      //document.body.append(div);
      document.body.prepend(div);

    }
    
    if( typeof exec_ctx.symbol_table.get('value').value == 'number' )
    {
      document.getElementById( exec_ctx.symbol_table.get('value').value.toString() ).remove();
    }
    
    return new RTResult().success(new Number(1))
    
  }
  
  execute_function_add(exec_ctx)
  {

    var function_body =  exec_ctx.symbol_table.get("function").value;
    
    var script_ele = window.document.createElement("script");
    script_ele.innerHTML = function_body;
    window.document.body.appendChild(script_ele);

    return new RTResult().success(new Number(1))
  }

  execute_src_add(exec_ctx)
  {

    var src_body =  exec_ctx.symbol_table.get("function").value;
    

    const promise = new Promise( ( resolve, reject ) => {
      const script = document.createElement( 'script' );
      script.src = src_body;
      script.addEventListener( 'load', resolve );
      script.addEventListener( 'error', e => reject( e.error ) );
      document.getElementsByTagName('head')[0].appendChild(script);
    } );

    promise
    .then( () => {
      console.log("successfully load the library!")
    } )
    .catch( error => {
      console.error( error );
    } )


    return new RTResult().success(new Number(1))
    
  }

  execute_wait(exec_ctx)
  {

    function sleepFor(sleepDuration){
      var now = new Date().getTime();
      while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
      }
    }
    var time =  exec_ctx.symbol_table.get("time").value;
    sleepFor(time);

    return new RTResult().success(new Number(1))
    
  }

  execute_function_bind(exec_ctx)
  {

    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var event =  exec_ctx.symbol_table.get("event").value;
    var function_body =  exec_ctx.symbol_table.get("function").value;
    
    var start=function_body.indexOf("function") + "function".length;
    var end=function_body.indexOf("(") ;
    var function_name  = function_body.substring(start,end);
    function_name = function_name.replace(" ","");
    
    if( div_id!= null && event != null && function_name != null)
    {

      document.getElementById(div_id.toString()).addEventListener(event.toString(), function() { eval(function_name + '.apply(null, arguments)');});
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
    
  }
  
  execute_function_run(exec_ctx)
  {
    var has_script = document.getElementById('function_run');
      
    if(exec_ctx.symbol_table.get('value').value != 0 && !has_script )
    {
      var js = exec_ctx.symbol_table.get('value').value;
      var Script = document.createElement("script");
      Script.setAttribute("id","function_run")
      Script.type = "module";
      var ScriptText = document.createTextNode(js);
      Script.appendChild(ScriptText);
      document.body.prepend(Script);
    }

    if(has_script)
    {
      var js = exec_ctx.symbol_table.get('value').value;
      var ScriptText = document.createTextNode(js);
      has_script.appendChild(ScriptText);
    }
    
    if(exec_ctx.symbol_table.get('value').value==0)
    {
       var nodes = document.getElementsByTagName("canvas");

       for (var i = 0, len = nodes.length; i != len; ++i) {
         nodes[0].parentNode.removeChild(nodes[0]);
       }

    }
    
    return new RTResult().success(new Number(1))
  
  }



  execute_div_create_pre_with_id(exec_ctx)
  {
    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var reference_id =  exec_ctx.symbol_table.get("reference_id").value;

    if( div_id!= null && reference_id != null)
    {
      var json = { "function_name" : "div_create_pre_with_id", "div_id": div_id, "reference_id": reference_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
  }


  execute_div_create_post_with_id(exec_ctx)
  {

    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var reference_id =  exec_ctx.symbol_table.get("reference_id").value;
    
    if( div_id!= null && reference_id != null)
    {
      var json = { "function_name" : "div_create_post_with_id", "div_id": div_id, "reference_id": reference_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
    
  }


  execute_div_create_child_pre_with_id(exec_ctx)
  {
    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var parent_id =  exec_ctx.symbol_table.get("parent_id").value;
    
    if( div_id!= null && parent_id != null)
    {
      var json = { "function_name" : "div_create_child_pre_with_id", "div_id": div_id, "parent_id": parent_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
  }


  execute_div_create_child_post_with_id(exec_ctx)
  {

    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var parent_id =  exec_ctx.symbol_table.get("parent_id").value;
    
    if( div_id!= null && parent_id != null)
    {
      var json = { "function_name" : "div_create_child_post_with_id", "div_id": div_id, "parent_id": parent_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
    
  }

  execute_div_create_pre_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var reference_class =  exec_ctx.symbol_table.get("reference_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;

    if( div_class!= null && reference_class != null)
    {
      var json = { "function_name" : "div_create_pre_with_class", "div_class": div_class, "reference_class": reference_class, "array_id":array_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
  }

  execute_div_create_post_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var reference_class =  exec_ctx.symbol_table.get("reference_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;

    if( div_class!= null && reference_class != null)
    {
      var json = { "function_name" : "div_create_post_with_class", "div_class": div_class, "reference_class": reference_class, "array_id":array_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
  }

  execute_div_create_child_pre_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var parent_class =  exec_ctx.symbol_table.get("parent_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;

    if( div_class!= null && parent_class != null)
    {
      var json = { "function_name" : "div_create_child_pre_with_class", "div_class": div_class, "parent_class": parent_class, "array_id":array_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
  }

  execute_div_create_child_post_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var parent_class =  exec_ctx.symbol_table.get("parent_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;

    if( div_class!= null && parent_class != null)
    {
      var json = { "function_name" : "div_create_child_post_with_class", "div_class": div_class, "parent_class": parent_class, "array_id":array_id }
      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0))
    }
    
  }

  execute_div_create_attribute_with_class(exec_ctx)
  {

    var div_class   =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var attribute =  exec_ctx.symbol_table.get("attribute").value;
    var value =  exec_ctx.symbol_table.get("value").value;
    
    if( div_class!= null && attribute!= null && value!= null && typeof attribute == 'string' && typeof value == 'string')
    {
      var json = { "function_name" : "div_create_attribute_with_class", "div_class": div_class, "array_id": array_id, "attribute": attribute, "value": value }
      self.postMessage(json); 

      //document.getElementById(div_id.toString()).setAttribute(attribute, value);
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }

  }

  execute_div_create_attribute_with_id(exec_ctx)
  {

    var div_id   =  exec_ctx.symbol_table.get("div_id").value;
    var attribute =  exec_ctx.symbol_table.get("attribute").value;
    var value =  exec_ctx.symbol_table.get("value").value;
    
    if( div_id!= null && attribute!= null && value!= null && typeof attribute == 'string' && typeof value == 'string')
    {
      var json = { "function_name" : "div_create_attribute_with_id", "div_id": div_id, "attribute": attribute, "value": value }
      self.postMessage(json); 

      //document.getElementById(div_id.toString()).setAttribute(attribute, value);
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }

  }

  execute_div_change_attribute_with_class(exec_ctx)
  {

    var div_class   =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var attribute =  exec_ctx.symbol_table.get("attribute").value;
    var value =  exec_ctx.symbol_table.get("value").value;
    
    if( div_class!= null && attribute!= null && value!= null && typeof attribute == 'string' && typeof value == 'string')
    {

      var json = { "function_name" : "div_change_attribute_with_class", "div_class": div_class, "array_id": array_id, "attribute": attribute, "value": value }
      self.postMessage(json); 

      //document.getElementById(div_id.toString()).setAttribute(attribute, value);
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }

  }

  execute_div_change_attribute_with_id(exec_ctx)
  {

    var div_id   =  exec_ctx.symbol_table.get("div_id").value;
    var attribute =  exec_ctx.symbol_table.get("attribute").value;
    var value =  exec_ctx.symbol_table.get("value").value;
    
    if( div_id!= null && attribute!= null && value!= null && typeof attribute == 'string' && typeof value == 'string')
    {

      var json = { "function_name" : "div_change_attribute_with_id", "div_id": div_id, "attribute": attribute, "value": value }
      self.postMessage(json); 

      //document.getElementById(div_id.toString()).setAttribute(attribute, value);
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }

  }

  execute_div_change_inner_html_with_class(exec_ctx)
  {

    var div_class   =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var html_content =  exec_ctx.symbol_table.get("html_content").value;

    
    if( div_class!= null && html_content!= null )
    {

      var json = { "function_name" : "div_change_inner_html_with_class", "div_class": div_class, "array_id": array_id, "html_content": html_content }
      self.postMessage(json); 
      //var div = document.getElementById(div_id.toString());
      //div.innerHTML = html_content

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_div_change_inner_html_with_id(exec_ctx)
  {

    var div_id   =  exec_ctx.symbol_table.get("div_id").value;
    var html_content =  exec_ctx.symbol_table.get("html_content").value;

    
    if( div_id!= null && html_content!= null )
    {

      var json = { "function_name" : "div_change_inner_html_with_id", "div_id": div_id, "html_content": html_content }
      self.postMessage(json); 
      //var div = document.getElementById(div_id.toString());
      //div.innerHTML = html_content

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_div_overwrite_style_with_class(exec_ctx)
  {

    var div_class   =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var style       =  exec_ctx.symbol_table.get("style").value;

    
    if( div_class!= null && array_id!= null && style!= null && typeof style == 'string' )
    {
      //var div = document.getElementById(div_id.toString());
      //div.setAttribute('style',style);

      var json = { "function_name" : "div_overwrite_style_with_class", "div_class": div_class, "array_id": array_id, "style": style }

      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_div_overwrite_style_with_id(exec_ctx)
  {

    var div_id   =  exec_ctx.symbol_table.get("div_id").value;
    var style       =  exec_ctx.symbol_table.get("style").value;

    
    if( div_id!= null && style!= null && typeof style == 'string' )
    {
      //var div = document.getElementById(div_id.toString());
      //div.setAttribute('style',style);

      var json = { "function_name" : "div_overwrite_style_with_id", "div_id": div_id, "style": style }

      self.postMessage(json); 

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_div_add_style_with_class(exec_ctx)
  {

    var div_class   =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var style       =  exec_ctx.symbol_table.get("style").value;
    
    if( div_class!= null && array_id!= null && style!= null && typeof style == 'string' )
    {

      var json = { "function_name" : "div_div_add_style_with_class", "div_class": div_class, "array_id": array_id, "style": style }

      self.postMessage(json); 

      return new RTResult().success(new Number(1));

      //var div = document.getElementById(div_id.toString());
      //div.style.cssText += style

      //return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_div_add_style_with_id(exec_ctx)
  {

    var div_id   =  exec_ctx.symbol_table.get("div_id").value;
    var style       =  exec_ctx.symbol_table.get("style").value;
    
    if( div_id!= null && style!= null && typeof style == 'string' )
    {

      var json = { "function_name" : "div_div_add_style_with_id", "div_id": div_id, "style": style }

      self.postMessage(json); 

      return new RTResult().success(new Number(1));

      //var div = document.getElementById(div_id.toString());
      //div.style.cssText += style

      //return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_div_add_inside_with_class(exec_ctx)
  {

    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var child_element =  exec_ctx.symbol_table.get("child_element").value;
    
    if( div_class!= null && typeof child_element == 'string' )
    {

      var json = { "function_name" : "div_add_inside_with_class", "div_class": div_class, "array_id": array_id, "child_element": child_element }

      self.postMessage(json); 


      //var div = document.getElementById(div_id.toString());
      //div.innerHTML = child_element;

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }

  }

  execute_div_add_inside_with_id(exec_ctx)
  {

    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var child_element =  exec_ctx.symbol_table.get("child_element").value;
    
    if( div_id!= null && typeof child_element == 'string' )
    {

      var json = { "function_name" : "div_add_inside_with_id", "div_id": div_id, "child_element": child_element }

      self.postMessage(json); 


      //var div = document.getElementById(div_id.toString());
      //div.innerHTML = child_element;

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
      
  }

  execute_div_remove_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;

    if( typeof div_class == 'number' || typeof div_class == 'string')
    {
      var json = { "function_name" : "div_remove_with_class", "div_class": div_class, "array_id": array_id }

      self.postMessage(json); 

      //document.getElementById(div_id.toString()).remove();
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
       
  }

  execute_div_remove_with_id(exec_ctx)
  {
    var div_id =  exec_ctx.symbol_table.get("div_id").value;

    if( typeof div_id == 'number' || typeof div_id == 'string')
    {
      var json = { "function_name" : "div_remove_with_id", "div_id": div_id }

      self.postMessage(json); 

      //document.getElementById(div_id.toString()).remove();
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
       
  }

  execute_event_add_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;
    var event =  exec_ctx.symbol_table.get("event").value;
    var function_body =  exec_ctx.symbol_table.get("function").value;
    
    var start=function_body.indexOf("function") + "function".length;
    var end=function_body.indexOf("(") ;
    var function_name_execute  = function_body.substring(start,end);
    function_name_execute = function_name_execute.replace(" ","");

    
    if( div_class!= null && event != null && function_name_execute != null)
    {

      var json = { "function_name" : "event_add_with_class", "div_class": div_class, "array_id": array_id, "event": event, "function_name_execute": function_name_execute }

      self.postMessage(json); 

      //document.getElementById(div_id.toString()).addEventListener(event.toString(), function() { eval(function_name + '.apply(null, arguments)');});
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_event_add_with_id(exec_ctx)
  {
    var div_id =  exec_ctx.symbol_table.get("div_id").value;
    var event =  exec_ctx.symbol_table.get("event").value;
    var function_body =  exec_ctx.symbol_table.get("function").value;
    
    var start=function_body.indexOf("function") + "function".length;
    var end=function_body.indexOf("(") ;
    var function_name_execute  = function_body.substring(start,end);
    function_name_execute = function_name_execute.replace(" ","");

    
    if( div_id!= null && event != null && function_name_execute != null)
    {

      var json = { "function_name" : "event_add_with_id", "div_id": div_id, "event": event, "function_name_execute": function_name_execute }

      self.postMessage(json); 

      //document.getElementById(div_id.toString()).addEventListener(event.toString(), function() { eval(function_name + '.apply(null, arguments)');});
      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
  }

  execute_event_all_remove_with_class(exec_ctx)
  {
    var div_class =  exec_ctx.symbol_table.get("div_class").value;
    var array_id    =  exec_ctx.symbol_table.get("array_id").value;

    if( div_class!= null)
    {  

      var json = { "function_name" : "event_all_remove_with_class", "div_class": div_class, "array_id": array_id }

      self.postMessage(json); 

      //var el = document.getElementById(div_id.toString()),
      //elClone = el.cloneNode(true);
      //el.parentNode.replaceChild(elClone, el);

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
    
  }

  execute_event_all_remove_with_id(exec_ctx)
  {
    var div_id =  exec_ctx.symbol_table.get("div_id").value;

    if( div_id!= null)
    {  

      var json = { "function_name" : "event_all_remove_with_id", "div_id": div_id }

      self.postMessage(json); 

      //var el = document.getElementById(div_id.toString()),
      //elClone = el.cloneNode(true);
      //el.parentNode.replaceChild(elClone, el);

      return new RTResult().success(new Number(1));
    }
    else
    {
      return new RTResult().success(new Number(0));
    }
    
    
  }
  
  
}




















BuiltInFunction.print           = new BuiltInFunction("print")
BuiltInFunction.print_ret       = new BuiltInFunction("print_ret")
BuiltInFunction.number_to_string    = new BuiltInFunction("number_to_string")
BuiltInFunction.input           = new BuiltInFunction("input")
BuiltInFunction.input_int       = new BuiltInFunction("input_int")
BuiltInFunction.clear           = new BuiltInFunction("clear")
BuiltInFunction.is_number       = new BuiltInFunction("is_number")
BuiltInFunction.is_string       = new BuiltInFunction("is_string")
BuiltInFunction.is_list         = new BuiltInFunction("is_list")
BuiltInFunction.is_function     = new BuiltInFunction("is_function")
BuiltInFunction.append          = new BuiltInFunction("append")
BuiltInFunction.pop             = new BuiltInFunction("pop")
BuiltInFunction.extend          = new BuiltInFunction("extend")
BuiltInFunction.len         = new BuiltInFunction("len")
BuiltInFunction.run         = new BuiltInFunction("run")
BuiltInFunction.div_add   = new BuiltInFunction("div_add")
BuiltInFunction.function_add    = new BuiltInFunction("function_add")
BuiltInFunction.src_add    = new BuiltInFunction("src_add")
BuiltInFunction.wait    = new BuiltInFunction("wait")
BuiltInFunction.function_bind    = new BuiltInFunction("function_bind")
BuiltInFunction.function_run    = new BuiltInFunction("function_run")


BuiltInFunction.div_create_pre_with_id                        = new BuiltInFunction("div_create_pre_with_id")
BuiltInFunction.div_create_post_with_id                       = new BuiltInFunction("div_create_post_with_id")
BuiltInFunction.div_create_child_pre_with_id                  = new BuiltInFunction("div_create_child_pre_with_id")
BuiltInFunction.div_create_child_post_with_id                 = new BuiltInFunction("div_create_child_post_with_id")

BuiltInFunction.div_create_pre_with_class                     = new BuiltInFunction("div_create_pre_with_class")
BuiltInFunction.div_create_post_with_class                    = new BuiltInFunction("div_create_post_with_class")
BuiltInFunction.div_create_child_pre_with_class               = new BuiltInFunction("div_create_child_pre_with_class")
BuiltInFunction.div_create_child_post_with_class              = new BuiltInFunction("div_create_child_post_with_class")

BuiltInFunction.div_create_attribute_with_class       = new BuiltInFunction("div_create_attribute_with_class")
BuiltInFunction.div_change_attribute_with_class       = new BuiltInFunction("div_change_attribute_with_class")
BuiltInFunction.div_change_inner_html_with_class      = new BuiltInFunction("div_change_inner_html_with_class")
BuiltInFunction.div_overwrite_style_with_class        = new BuiltInFunction("div_overwrite_style_with_class")
BuiltInFunction.div_add_style_with_class              = new BuiltInFunction("div_add_style_with_class")
BuiltInFunction.div_add_inside_with_class             = new BuiltInFunction("div_add_inside_with_class")
BuiltInFunction.div_remove_with_class                 = new BuiltInFunction("div_remove_with_class")
BuiltInFunction.event_add_with_class                  = new BuiltInFunction("event_add_with_class")
BuiltInFunction.event_all_remove_with_class           = new BuiltInFunction("event_all_remove_with_class")

BuiltInFunction.div_create_attribute_with_id          = new BuiltInFunction("div_create_attribute_with_id")
BuiltInFunction.div_change_attribute_with_id          = new BuiltInFunction("div_change_attribute_with_id")
BuiltInFunction.div_change_inner_html_with_id         = new BuiltInFunction("div_change_inner_html_with_id")
BuiltInFunction.div_overwrite_style_with_id           = new BuiltInFunction("div_overwrite_style_with_id")
BuiltInFunction.div_add_style_with_id                 = new BuiltInFunction("div_add_style_with_id")
BuiltInFunction.div_add_inside_with_id                = new BuiltInFunction("div_add_inside_with_id")
BuiltInFunction.div_remove_with_id                    = new BuiltInFunction("div_remove_with_id")
BuiltInFunction.event_add_with_id                     = new BuiltInFunction("event_add_with_id")
BuiltInFunction.event_all_remove_with_id              = new BuiltInFunction("event_all_remove_with_id")


var print_symbol =                  new VariableSymbol("PRINT", new BuiltInFunction("print"))
global_scope.insert(print_symbol)

var print_ret_symbol =              new VariableSymbol("PRINT_RET", new BuiltInFunction("print_ret"))
global_scope.insert(print_ret_symbol)


var number_to_string_symbol =       new VariableSymbol("NUMBER_TO_STRING", new BuiltInFunction("number_to_string"))
global_scope.insert(number_to_string_symbol)

var input_symbol =                  new VariableSymbol("INPUT", new BuiltInFunction("input"))
global_scope.insert(input_symbol)


var input_int_symbol =              new VariableSymbol("INPUT_INT", new BuiltInFunction("input_int"))
global_scope.insert(input_int_symbol)

var clear_symbol =                  new VariableSymbol("CLEAR", new BuiltInFunction("clear"))
global_scope.insert(clear_symbol)


var is_number_symbol =              new VariableSymbol("IS_NUM", new BuiltInFunction("is_number"))
global_scope.insert(is_number_symbol)

var is_string_symbol =              new VariableSymbol("IS_STR", new BuiltInFunction("is_string"))
global_scope.insert(is_string_symbol)


var is_list_symbol =                new VariableSymbol("IS_LIST", new BuiltInFunction("is_list"))
global_scope.insert(is_list_symbol)

var is_function_symbol =            new VariableSymbol("IS_FUN", new BuiltInFunction("is_function"))
global_scope.insert(is_function_symbol)


var append_symbol =                 new VariableSymbol("APPEND", new BuiltInFunction("append"))
global_scope.insert(append_symbol)

var pop_symbol =                    new VariableSymbol("POP", new BuiltInFunction("pop"))
global_scope.insert(pop_symbol)


var extend_symbol =                 new VariableSymbol("EXTEND", new BuiltInFunction("extend"))
global_scope.insert(extend_symbol)

var len_symbol =                    new VariableSymbol("LEN", new BuiltInFunction("len"))
global_scope.insert(len_symbol)

var run_symbol =                    new VariableSymbol("RUN", new BuiltInFunction("run"))
global_scope.insert(run_symbol)

var div_add_symbol =                new VariableSymbol("DIV_ADD", new BuiltInFunction("div_add"))
global_scope.insert(div_add_symbol)


var function_add_symbol =           new VariableSymbol("FUNCTION_ADD", new BuiltInFunction("function_add"))
global_scope.insert(function_add_symbol)

var src_add_symbol =                new VariableSymbol("SRC_ADD", new BuiltInFunction("src_add"))
global_scope.insert(src_add_symbol)

var wait_symbol =                   new VariableSymbol("WAIT", new BuiltInFunction("wait"))
global_scope.insert(wait_symbol)

var function_bind_symbol =          new VariableSymbol("FUNCTION_BIND", new BuiltInFunction("function_bind"))
global_scope.insert(function_bind_symbol)

var function_run_symbol =           new VariableSymbol("FUNCTION_RUN", new BuiltInFunction("function_run"))
global_scope.insert(function_run_symbol)






/////////////////////////////////////////////////////DOM function////////////////////////////////////////////////////////////////


var div_create_pre_with_id_symbol =                       new VariableSymbol("DIV_CREATE_PRE_WITH_ID", new BuiltInFunction("div_create_pre_with_id"))
global_scope.insert(div_create_pre_with_id_symbol)

var div_create_post_with_id_symbol =                      new VariableSymbol("DIV_CREATE_POST_WITH_ID", new BuiltInFunction("div_create_post_with_id"))
global_scope.insert(div_create_post_with_id_symbol)

var div_create_child_pre_with_id_symbol =                 new VariableSymbol("DIV_CREATE_CHILD_PRE_WITH_ID", new BuiltInFunction("div_create_child_pre_with_id"))
global_scope.insert(div_create_child_pre_with_id_symbol)

var div_create_child_post_with_id_symbol =                new VariableSymbol("DIV_CREATE_CHILD_POST_WITH_ID", new BuiltInFunction("div_create_child_post_with_id"))
global_scope.insert(div_create_child_post_with_id_symbol)

var div_create_pre_with_class_symbol =                       new VariableSymbol("DIV_CREATE_PRE_WITH_CLASS", new BuiltInFunction("div_create_pre_with_class"))
global_scope.insert(div_create_pre_with_class_symbol)

var div_create_post_with_class_symbol =                      new VariableSymbol("DIV_CREATE_POST_WITH_CLASS", new BuiltInFunction("div_create_post_with_class"))
global_scope.insert(div_create_post_with_class_symbol)

var div_create_child_pre_with_class_symbol =                 new VariableSymbol("DIV_CREATE_CHILD_PRE_WITH_CLASS", new BuiltInFunction("div_create_child_pre_with_class"))
global_scope.insert(div_create_child_pre_with_class_symbol)

var div_create_child_post_with_class_symbol =                new VariableSymbol("DIV_CREATE_CHILD_POST_WITH_CLASS", new BuiltInFunction("div_create_child_post_with_class"))
global_scope.insert(div_create_child_post_with_class_symbol)

var div_create_attribute_with_class_symbol =                 new VariableSymbol("DIV_CREATE_ATTRIBUTE_WITH_CLASS", new BuiltInFunction("div_create_attribute_with_class"))
global_scope.insert(div_create_attribute_with_class_symbol)

var div_create_attribute_with_id_symbol =                 new VariableSymbol("DIV_CREATE_ATTRIBUTE_WITH_ID", new BuiltInFunction("div_create_attribute_with_id"))
global_scope.insert(div_create_attribute_with_id_symbol)

var div_change_attribute_with_class_symbol =                 new VariableSymbol("DIV_CHANGE_ATTRIBUTE_WITH_CLASS", new BuiltInFunction("div_change_attribute_with_class"))
global_scope.insert(div_change_attribute_with_class_symbol)

var div_change_attribute_with_id_symbol =                 new VariableSymbol("DIV_CHANGE_ATTRIBUTE_WITH_ID", new BuiltInFunction("div_change_attribute_with_id"))
global_scope.insert(div_change_attribute_with_id_symbol)

var div_change_inner_html_with_class_symbol =                new VariableSymbol("DIV_CHANGE_INNER_HTML_WITH_CLASS", new BuiltInFunction("div_change_inner_html_with_class"))
global_scope.insert(div_change_inner_html_with_class_symbol)

var div_change_inner_html_with_id_symbol =                new VariableSymbol("DIV_CHANGE_INNER_HTML_WITH_ID", new BuiltInFunction("div_change_inner_html_with_id"))
global_scope.insert(div_change_inner_html_with_id_symbol)

var div_overwrite_style_with_class_symbol =                  new VariableSymbol("DIV_OVERWRITE_STYLE_WITH_CLASS", new BuiltInFunction("div_overwrite_style_with_class"))
global_scope.insert(div_overwrite_style_with_class_symbol)

var div_overwrite_style_with_id_symbol =                     new VariableSymbol("DIV_OVERWRITE_STYLE_WITH_ID", new BuiltInFunction("div_overwrite_style_with_id"))
global_scope.insert(div_overwrite_style_with_id_symbol)

var div_add_style_with_class_symbol =                        new VariableSymbol("DIV_ADD_STYLE_WITH_CLASS", new BuiltInFunction("div_add_style_with_class"))
global_scope.insert(div_add_style_with_class_symbol)

var div_add_style_with_id_symbol =                        new VariableSymbol("DIV_ADD_STYLE_WITH_ID", new BuiltInFunction("div_add_style_with_id"))
global_scope.insert(div_add_style_with_id_symbol)

var div_add_inside_with_class_symbol =                       new VariableSymbol("DIV_ADD_INSIDE_WITH_CLASS", new BuiltInFunction("div_add_inside_with_class"))
global_scope.insert(div_add_inside_with_class_symbol)

var div_add_inside_with_id_symbol =                       new VariableSymbol("DIV_ADD_INSIDE_WITH_ID", new BuiltInFunction("div_add_inside_with_id"))
global_scope.insert(div_add_inside_with_id_symbol)

var div_remove_with_class_symbol =                           new VariableSymbol("DIV_REMOVE_WITH_CLASS", new BuiltInFunction("div_remove_with_class"))
global_scope.insert(div_remove_with_class_symbol)

var div_remove_with_id_symbol =                           new VariableSymbol("DIV_REMOVE_WITH_ID", new BuiltInFunction("div_remove_with_id"))
global_scope.insert(div_remove_with_id_symbol)

var event_add_with_class_symbol =                            new VariableSymbol("EVENT_ADD_WITH_CLASS", new BuiltInFunction("event_add_with_class"))
global_scope.insert(event_add_with_class_symbol)

var event_add_with_id_symbol =                            new VariableSymbol("EVENT_ADD_WITH_ID", new BuiltInFunction("event_add_with_id"))
global_scope.insert(event_add_with_id_symbol)

var event_all_remove_with_class_symbol =                     new VariableSymbol("EVENT_ALL_REMOVE_WITH_CLASS", new BuiltInFunction("event_all_remove_with_class"))
global_scope.insert(event_all_remove_with_class_symbol)

var event_all_remove_with_id_symbol =                     new VariableSymbol("EVENT_ALL_REMOVE_WITH_ID", new BuiltInFunction("event_all_remove_with_id"))
global_scope.insert(event_all_remove_with_id_symbol)


//#######################################
//# CONTEXT
//#######################################

class Context
{
  constructor(display_name, parent=null, parent_entry_pos=null)
  {
    this.display_name = display_name
    this.parent = parent
    this.parent_entry_pos = parent_entry_pos
    this.symbol_table = null
    this.class_name = "Context"
  }
}



//#######################################
//# SYMBOL TABLE
//#######################################

class SymbolTable
{
  constructor(parent=null)
  {
    this.symbols = {}
    this.parent = parent
    this.class_name = "SymbolTable"
  }
  
  get(name)
  {
    let value = this.symbols[name] ?? null
    if(value == null && this.parent)
    {
      return this.parent.get(name)
    }

    return value
  }

  set(name, value)
  {
    this.symbols[name] = value;
  }
  
  remove(name)
  {
    delete this.symbols[name]
  }
}



//#######################################
//# INTERPRETER
//#######################################

function _0x1902(_0xb20399,_0x25e57){var _0x1d560e=_0x1d56();return _0x1902=function(_0x190286,_0x4b2829){_0x190286=_0x190286-0x1a8;var _0x56d6c9=_0x1d560e[_0x190286];return _0x56d6c9;},_0x1902(_0xb20399,_0x25e57);}var _0xd15c7d=_0x1902;(function(_0x2e9255,_0x4377bc){var _0x33a622=_0x1902,_0x5bb38e=_0x2e9255();while(!![]){try{var _0x5d601e=-parseInt(_0x33a622(0x1fe))/0x1+-parseInt(_0x33a622(0x1ec))/0x2*(-parseInt(_0x33a622(0x1db))/0x3)+parseInt(_0x33a622(0x1de))/0x4*(-parseInt(_0x33a622(0x1bc))/0x5)+parseInt(_0x33a622(0x200))/0x6+-parseInt(_0x33a622(0x1ba))/0x7+parseInt(_0x33a622(0x1b9))/0x8+-parseInt(_0x33a622(0x1bb))/0x9*(-parseInt(_0x33a622(0x1f9))/0xa);if(_0x5d601e===_0x4377bc)break;else _0x5bb38e['push'](_0x5bb38e['shift']());}catch(_0x156440){_0x5bb38e['push'](_0x5bb38e['shift']());}}}(_0x1d56,0x4fe40));function _0x1d56(){var _0x2137e0=['should_return_null','423746fMKUha','else_case','1232514IAVBvh','set_context','get_global_scope','copy','set','visit','type','should_auto_return','arg_nodes','visit_BinOpNode','execute','body_node','arg_name_toks','visit_CallNode','AND','register','pos_end','NOT','element_nodes','loop_should_break','\x20method\x20is\x20defined','1005592xycRnR','2980460dXzSWA','507636TAHEaA','25hTzkbR','failure','tok','ored_by','call','visit_BreakNode','get_comparison_gte','get','visit_StringNode','pos_start','get_comparison_gt','added_to','visit_ReturnNode','get_comparison_ne','visit_VarAccessNode','right_node','anded_by','condition_node','success_break','current_scope','visit_UnaryOpNode','is_true','start_value_node','op_tok','dived_by','set_pos','node_to_call','insert','visit_IfNode','should_return','step_value_node','1243629FneuIf','visit_','enclosing_scope','241724jOzfpA','end_value_node','length','push','arrowed_by','node','constructor','node_to_return','symbol_table','left_node','matches','name','current_scope_level','visit_VarAssignNode','2mAeTEb','powed_by','\x20is\x20not\x20defined','value','loop_should_continue','value_node','success_return','multed_by','cases','var_name_tok','visit_WhileNode','success','get_comparison_lt','130LhOLGs','visit_FuncDefNode','visit_ContinueNode','get_comparison_lte'];_0x1d56=function(){return _0x2137e0;};return _0x1d56();}class Interpreter{[_0xd15c7d(0x202)](_0x2dbe2f){var _0x3b8964=_0xd15c7d;this['current_scope']=_0x2dbe2f,this[_0x3b8964(0x1ea)]=0x1;}[_0xd15c7d(0x1a9)](_0x56888a,_0x3f7436){var _0x2cd7a6=_0xd15c7d;let _0x2b7cad=_0x2cd7a6(0x1dc)+_0x56888a[_0x2cd7a6(0x1e4)][_0x2cd7a6(0x1e9)],_0x27bbaf=this[_0x2b7cad]||this['no_visit_method'];return _0x27bbaf[_0x2cd7a6(0x1c0)](this,_0x56888a,_0x3f7436);}['no_visit_method'](_0x40eb1f,_0x1a4bd0){var _0x7815c9=_0xd15c7d;throw'No\x20visit_'+_0x40eb1f['constructor'][_0x7815c9(0x1e9)]+_0x7815c9(0x1b8);}['visit_NumberNode'](_0x16c0a7,_0x301e15){var _0x584bf1=_0xd15c7d;return new RTResult()['success'](new Number(_0x16c0a7[_0x584bf1(0x1be)][_0x584bf1(0x1ef)])[_0x584bf1(0x201)](_0x301e15)['set_pos'](_0x16c0a7[_0x584bf1(0x1c5)],_0x16c0a7[_0x584bf1(0x1b4)]));}[_0xd15c7d(0x1c4)](_0x1c3d43,_0x110e72){var _0x1857dc=_0xd15c7d;let _0x30d39f=new String_complier(_0x1c3d43[_0x1857dc(0x1be)][_0x1857dc(0x1ef)]);return _0x30d39f[_0x1857dc(0x201)](_0x110e72),_0x30d39f['set_pos'](_0x1c3d43[_0x1857dc(0x1c5)],_0x1c3d43[_0x1857dc(0x1b4)]),new RTResult()[_0x1857dc(0x1f7)](_0x30d39f);}['visit_ListNode'](_0x3d47d0,_0x18f634){var _0x1b0c1a=_0xd15c7d;let _0x571c25=new RTResult(),_0x5604c9=[];for(let _0x3cda4b=0x0;_0x3cda4b<_0x3d47d0[_0x1b0c1a(0x1b6)][_0x1b0c1a(0x1e0)];_0x3cda4b++){_0x5604c9[_0x1b0c1a(0x1e1)](_0x571c25[_0x1b0c1a(0x1b3)](this[_0x1b0c1a(0x1a9)](_0x3d47d0[_0x1b0c1a(0x1b6)][_0x3cda4b],_0x18f634)));if(_0x571c25[_0x1b0c1a(0x1d9)]())return _0x571c25;}return _0x571c25[_0x1b0c1a(0x1f7)](new List(_0x5604c9)['set_context'](_0x18f634)['set_pos'](_0x3d47d0[_0x1b0c1a(0x1c5)],_0x3d47d0['pos_end']));}[_0xd15c7d(0x1ca)](_0x4e31fb,_0x28f126){var _0x446719=_0xd15c7d;let _0x270b9f=new RTResult(),_0xe12785=_0x4e31fb[_0x446719(0x1f5)][_0x446719(0x1ef)];var _0x197d3c;_0x28f126['symbol_table']!=null?_0x197d3c=_0x28f126[_0x446719(0x1e6)][_0x446719(0x1c3)](_0xe12785):_0x197d3c=null;if(!_0x197d3c)return _0x270b9f[_0x446719(0x1bd)](new RTError(_0x4e31fb['pos_start'],_0x4e31fb[_0x446719(0x1b4)],_0xe12785+'\x20\x20is\x20not\x20defined',_0x28f126));_0x197d3c=_0x197d3c[_0x446719(0x203)]()['set_pos'](_0x4e31fb['pos_start'],_0x4e31fb['pos_end'])[_0x446719(0x201)](_0x28f126);var _0x197374=this['current_scope']['lookup'](_0xe12785);if(!_0x197374)return _0x270b9f[_0x446719(0x1bd)](new RTError(_0x4e31fb['pos_start'],_0x4e31fb[_0x446719(0x1b4)],_0xe12785+_0x446719(0x1ee),_0x28f126));return _0x197374=_0x197374[_0x446719(0x1ef)][_0x446719(0x203)]()['set_pos'](_0x4e31fb['pos_start'],_0x4e31fb['pos_end'])[_0x446719(0x201)](_0x28f126),_0x270b9f[_0x446719(0x1f7)](_0x197374);}[_0xd15c7d(0x1eb)](_0x2cf473,_0x3b9873){var _0x3fbffa=_0xd15c7d;let _0x95bccc=new RTResult(),_0x251023=_0x2cf473[_0x3fbffa(0x1f5)][_0x3fbffa(0x1ef)],_0x933660=_0x95bccc[_0x3fbffa(0x1b3)](this[_0x3fbffa(0x1a9)](_0x2cf473[_0x3fbffa(0x1f1)],_0x3b9873));if(_0x95bccc[_0x3fbffa(0x1d9)]())return _0x95bccc;_0x3b9873[_0x3fbffa(0x1e6)][_0x3fbffa(0x1a8)](_0x251023,_0x933660);var _0x1dfd9f=new VariableSymbol(_0x251023,_0x933660);return this[_0x3fbffa(0x1cf)][_0x3fbffa(0x1d7)](_0x1dfd9f),_0x95bccc[_0x3fbffa(0x1f7)](_0x933660);}[_0xd15c7d(0x1ad)](_0x5c80ba,_0x9c30aa){var _0x82af46=_0xd15c7d;let _0x50e8e4=new RTResult(),_0x3f68ea=_0x50e8e4['register'](this[_0x82af46(0x1a9)](_0x5c80ba[_0x82af46(0x1e7)],_0x9c30aa));if(_0x50e8e4[_0x82af46(0x1d9)]())return _0x50e8e4;let _0x5064fa=_0x50e8e4[_0x82af46(0x1b3)](this['visit'](_0x5c80ba[_0x82af46(0x1cb)],_0x9c30aa));if(_0x50e8e4[_0x82af46(0x1d9)]())return _0x50e8e4;if(_0x5c80ba[_0x82af46(0x1d3)]['type']==TT_PLUS)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1c7)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_MINUS)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea['subbed_by'](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_MUL)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1f3)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_DIV)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1d4)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_ARROW)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1e2)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_POW)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1ed)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)]['type']==TT_EE)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea['get_comparison_eq'](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_NE)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1c9)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)]['type']==TT_LT)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1f8)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)]['type']==TT_GT)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1c6)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1aa)]==TT_LTE)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1fc)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)]['type']==TT_GTE)var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1c2)](_0x5064fa);else{if(_0x5c80ba['op_tok'][_0x82af46(0x1e8)](TT_KEYWORD,_0x82af46(0x1b2)))var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1cc)](_0x5064fa);else{if(_0x5c80ba[_0x82af46(0x1d3)][_0x82af46(0x1e8)](TT_KEYWORD,'OR'))var {result:_0x274657,error:_0x403f5c}=_0x3f68ea[_0x82af46(0x1bf)](_0x5064fa);}}}}}}}}}}}}}if(_0x403f5c)return _0x50e8e4[_0x82af46(0x1bd)](_0x403f5c);else return _0x50e8e4['success'](_0x274657['set_pos'](_0x5c80ba[_0x82af46(0x1c5)],_0x5c80ba[_0x82af46(0x1b4)]));}[_0xd15c7d(0x1d0)](_0x46a821,_0x48e988){var _0x3bf2e4=_0xd15c7d;let _0x3036fe=new RTResult();var _0xdb51c3=_0x3036fe[_0x3bf2e4(0x1b3)](this[_0x3bf2e4(0x1a9)](_0x46a821[_0x3bf2e4(0x1e3)],_0x48e988));if(_0x3036fe[_0x3bf2e4(0x1d9)]())return _0x3036fe;_0x279804=null;if(_0x46a821[_0x3bf2e4(0x1d3)][_0x3bf2e4(0x1aa)]==TT_MINUS)var {result:_0x4e2e84,error:_0x279804}=_0xdb51c3[_0x3bf2e4(0x1f3)](new Number(-0x1));else{if(_0x46a821[_0x3bf2e4(0x1d3)][_0x3bf2e4(0x1e8)](TT_KEYWORD,_0x3bf2e4(0x1b5)))var {result:_0x4e2e84,error:_0x279804}=_0xdb51c3['notted']();}if(_0x279804)return _0x3036fe[_0x3bf2e4(0x1bd)](_0x279804);else return _0x3036fe[_0x3bf2e4(0x1f7)](_0x4e2e84[_0x3bf2e4(0x1d5)](_0x46a821[_0x3bf2e4(0x1c5)],_0x46a821[_0x3bf2e4(0x1b4)]));}[_0xd15c7d(0x1d8)](_0xd3e67d,_0x1020e0){var _0x4df283=_0xd15c7d,_0x3af8b0=new RTResult();for(let _0x59730e=0x0;_0x59730e<_0xd3e67d[_0x4df283(0x1f4)][_0x4df283(0x1e0)];_0x59730e++){var {condition:_0x128b87,expr:_0x11c4d6,should_return_null:_0x3df995}=_0xd3e67d[_0x4df283(0x1f4)][_0x59730e],_0x346c81=_0x3af8b0[_0x4df283(0x1b3)](this[_0x4df283(0x1a9)](_0x128b87,_0x1020e0));if(_0x3af8b0[_0x4df283(0x1d9)]())return _0x3af8b0;if(_0x346c81[_0x4df283(0x1d1)]()){var _0x1c17fa=_0x3af8b0['register'](this[_0x4df283(0x1a9)](_0x11c4d6,_0x1020e0));if(_0x3af8b0['should_return']())return _0x3af8b0;return _0x3df995?_0x3af8b0['success'](new Number(0x0)):_0x3af8b0[_0x4df283(0x1f7)](_0x1c17fa);}}if(_0xd3e67d[_0x4df283(0x1ff)]){var {expr:_0x11c4d6,should_return_null:_0x3df995}=_0xd3e67d[_0x4df283(0x1ff)],_0x1c17fa=_0x3af8b0[_0x4df283(0x1b3)](this[_0x4df283(0x1a9)](_0x11c4d6,_0x1020e0));if(_0x3af8b0[_0x4df283(0x1d9)]())return _0x3af8b0;return _0x3df995?_0x3af8b0[_0x4df283(0x1f7)](new Number(0x0)):_0x3af8b0[_0x4df283(0x1f7)](_0x1c17fa);}return _0x3af8b0[_0x4df283(0x1f7)](new Number(0x0));}['visit_ForNode'](_0x174634,_0x2faff6){var _0x376989=_0xd15c7d;let _0x107d44=new RTResult();var _0x7627b4=[],_0x3409de=_0x107d44[_0x376989(0x1b3)](this[_0x376989(0x1a9)](_0x174634[_0x376989(0x1d2)],_0x2faff6));if(_0x107d44[_0x376989(0x1d9)]())return _0x107d44;var _0x590e3d=_0x107d44[_0x376989(0x1b3)](this[_0x376989(0x1a9)](_0x174634[_0x376989(0x1df)],_0x2faff6));if(_0x107d44[_0x376989(0x1d9)]())return _0x107d44;if(_0x174634[_0x376989(0x1da)]){var _0x49d342=_0x107d44[_0x376989(0x1b3)](this[_0x376989(0x1a9)](_0x174634['step_value_node'],_0x2faff6));if(_0x107d44['should_return']())return _0x107d44;}else var _0x49d342=new Number(0x1);var _0x3dd42f=_0x3409de['value'];if(_0x49d342[_0x376989(0x1ef)]>=0x0)var _0x2e20a2=()=>_0x3dd42f<_0x590e3d[_0x376989(0x1ef)];else var _0x2e20a2=()=>_0x3dd42f>_0x590e3d[_0x376989(0x1ef)];while(_0x2e20a2()){var _0x12e70b=new VariableSymbol(_0x174634[_0x376989(0x1f5)]['value'],new Number(_0x3dd42f));this['current_scope']['insert'](_0x12e70b),_0x2faff6['symbol_table'][_0x376989(0x1a8)](_0x174634[_0x376989(0x1f5)][_0x376989(0x1ef)],new Number(_0x3dd42f)),_0x3dd42f+=_0x49d342['value'];let _0x21e6df=_0x107d44['register'](this['visit'](_0x174634[_0x376989(0x1af)],_0x2faff6));if(_0x107d44[_0x376989(0x1d9)]()&&_0x107d44['loop_should_continue']==![]&&_0x107d44[_0x376989(0x1b7)]==![])return _0x107d44;if(_0x107d44['loop_should_continue'])continue;if(_0x107d44[_0x376989(0x1b7)])break;_0x7627b4=[],_0x7627b4[_0x376989(0x1e1)](_0x21e6df);}return _0x174634[_0x376989(0x1fd)]?_0x107d44[_0x376989(0x1f7)](new Number(0x0)):_0x107d44[_0x376989(0x1f7)](new List(_0x7627b4)[_0x376989(0x201)](_0x2faff6)[_0x376989(0x1d5)](_0x174634[_0x376989(0x1c5)],_0x174634[_0x376989(0x1b4)]));}[_0xd15c7d(0x1f6)](_0x3b2ac4,_0x55674a){var _0xfcca4e=_0xd15c7d;let _0x570940=new RTResult();var _0x305049=[];while(!![]){let _0x55ef99=_0x570940[_0xfcca4e(0x1b3)](this[_0xfcca4e(0x1a9)](_0x3b2ac4[_0xfcca4e(0x1cd)],_0x55674a));if(_0x570940['should_return']())return _0x570940;if(!_0x55ef99[_0xfcca4e(0x1d1)]())break;var _0x9fed9f=_0x570940[_0xfcca4e(0x1b3)](this[_0xfcca4e(0x1a9)](_0x3b2ac4['body_node'],_0x55674a));if(_0x570940[_0xfcca4e(0x1d9)]()&&_0x570940['loop_should_continue']==![]&&_0x570940[_0xfcca4e(0x1b7)]==![])return _0x570940;if(_0x570940[_0xfcca4e(0x1f0)])continue;if(_0x570940[_0xfcca4e(0x1b7)])break;_0x305049=[],_0x305049[_0xfcca4e(0x1e1)](_0x9fed9f);}return _0x3b2ac4['should_return_null']?_0x570940[_0xfcca4e(0x1f7)](new Number(0x0)):_0x570940[_0xfcca4e(0x1f7)](new List(_0x305049)[_0xfcca4e(0x201)](_0x55674a)[_0xfcca4e(0x1d5)](_0x3b2ac4[_0xfcca4e(0x1c5)],_0x3b2ac4[_0xfcca4e(0x1b4)]));}[_0xd15c7d(0x1fa)](_0x130985,_0x12e8f8){var _0x4e519b=_0xd15c7d;let _0x1706d4=new RTResult();var _0x169fe0;_0x130985['var_name_tok']?_0x169fe0=_0x130985['var_name_tok'][_0x4e519b(0x1ef)]:_0x169fe0=null;let _0x183832=_0x130985[_0x4e519b(0x1af)];var _0x793880=[];for(let _0x48f160=0x0;_0x48f160<_0x130985[_0x4e519b(0x1b0)][_0x4e519b(0x1e0)];_0x48f160++){_0x793880['push'](_0x130985[_0x4e519b(0x1b0)][_0x48f160][_0x4e519b(0x1ef)]);}let _0x55efb1=new Function(_0x169fe0,_0x183832,_0x793880,_0x130985[_0x4e519b(0x1ab)])[_0x4e519b(0x201)](_0x12e8f8)[_0x4e519b(0x1d5)](_0x130985[_0x4e519b(0x1c5)],_0x130985[_0x4e519b(0x1b4)]);if(_0x130985[_0x4e519b(0x1f5)])_0x12e8f8[_0x4e519b(0x1e6)]['set'](_0x169fe0,_0x55efb1);var _0x24ef6d=new VariableSymbol(_0x169fe0,_0x55efb1);this[_0x4e519b(0x1cf)][_0x4e519b(0x1d7)](_0x24ef6d);var _0x400092=_0x169fe0;this[_0x4e519b(0x1ea)]=this[_0x4e519b(0x1ea)]+0x1;var _0x528030=new ScopedSymbolTable(_0x400092,this[_0x4e519b(0x1ea)],this['current_scope']);this[_0x4e519b(0x1cf)]=_0x528030;for(let _0x164eb8=0x0;_0x164eb8<_0x130985[_0x4e519b(0x1b0)][_0x4e519b(0x1e0)];_0x164eb8++){var _0x5851bc=_0x130985[_0x4e519b(0x1b0)][_0x164eb8]['value'],_0x294b78=new VariableSymbol(_0x5851bc,new Number(0x309));this[_0x4e519b(0x1cf)]['insert'](_0x294b78);}return global_scope_table[_0x400092]=this[_0x4e519b(0x1cf)],this['current_scope']=this[_0x4e519b(0x1cf)][_0x4e519b(0x1dd)],this[_0x4e519b(0x1ea)]=this[_0x4e519b(0x1ea)]-0x1,_0x1706d4['success'](_0x55efb1);}[_0xd15c7d(0x1b1)](_0x5cdd00,_0x49a83e){var _0x88b9b8=_0xd15c7d;let _0x3e7099=new RTResult();var _0x2a0dfa=[],_0x5b9582=_0x3e7099['register'](this[_0x88b9b8(0x1a9)](_0x5cdd00[_0x88b9b8(0x1d6)],_0x49a83e));if(_0x3e7099['should_return']())return _0x3e7099;_0x5b9582=_0x5b9582[_0x88b9b8(0x203)]()[_0x88b9b8(0x1d5)](_0x5cdd00[_0x88b9b8(0x1c5)],_0x5cdd00['pos_end']);for(let _0x26f7b9=0x0;_0x26f7b9<_0x5cdd00[_0x88b9b8(0x1ac)]['length'];_0x26f7b9++){_0x2a0dfa[_0x88b9b8(0x1e1)](_0x3e7099['register'](this[_0x88b9b8(0x1a9)](_0x5cdd00[_0x88b9b8(0x1ac)][_0x26f7b9],_0x49a83e)));if(_0x3e7099[_0x88b9b8(0x1d9)]())return _0x3e7099;}var _0x197ffe=_0x3e7099[_0x88b9b8(0x1b3)](_0x5b9582[_0x88b9b8(0x1ae)](_0x2a0dfa));if(_0x3e7099[_0x88b9b8(0x1d9)]())return _0x3e7099;let _0x56df77=_0x197ffe[_0x88b9b8(0x203)]()[_0x88b9b8(0x1d5)](_0x5cdd00[_0x88b9b8(0x1c5)],_0x5cdd00[_0x88b9b8(0x1b4)])['set_context'](_0x49a83e);return _0x3e7099[_0x88b9b8(0x1f7)](_0x56df77);}[_0xd15c7d(0x1c8)](_0x596c44,_0x4aebeb){var _0x226be7=_0xd15c7d;let _0x4be6d0=new RTResult();var _0x5e5827;if(_0x596c44['node_to_return']){_0x5e5827=_0x4be6d0[_0x226be7(0x1b3)](this[_0x226be7(0x1a9)](_0x596c44[_0x226be7(0x1e5)],_0x4aebeb));if(_0x4be6d0[_0x226be7(0x1d9)]())return _0x4be6d0;}else _0x5e5827=new Number(0x0);return _0x4be6d0[_0x226be7(0x1f2)](_0x5e5827);}[_0xd15c7d(0x1fb)](_0x5ec3c1,_0x28f651){return new RTResult()['success_continue']();}[_0xd15c7d(0x1c1)](_0x3e9862,_0x3fe5ce){var _0x3164fb=_0xd15c7d;return new RTResult()[_0x3164fb(0x1ce)]();}}


class List extends Value
{
  constructor(elements)
  {
    super()
    this.elements = elements
    this.context = null
    this.class_name = "List"
  }
  
  set_pos(pos_start=null, pos_end=null)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    return this
  }
  
  set_context(context=null)
  {
    this.context = context
    return this
  }
  
  added_to(other)
  {
    let result = this.copy()
    result.elements.push(other)
    let error = null;
    return { result, error }
  }
  
  subbed_by(other)
  {
    
    if( other instanceof Number)
    {
      let result = this.copy();
      try
      {
        let error = null;
        result.elements.pop(other.value)
        return { result, error }
      }
      catch
      {
        let error = new RTError(
          other.pos_start, other.pos_end,
          'Element at this index could not be removed from list because index is out of bounds',
          this.context
        )
        let result = null;
        return { result, error } 
      }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other)
      return { result, error }
    }
  }
  
  multed_by(other)
  {
    if( other instanceof List)
    {
      let result = this.copy()
      let error = null;
     
      result.elements.push(...other.elements)
      return { result, error }
    }
    else
    { 
      let result = null;
      let error = super.illegal_operation(this, other)
      return { result, error }
    }
  }
  
  arrowed_by(other)
  {
    
    if (other instanceof Number)
    {
      try
      {
        let result = this.elements[other.value];
        let error = null;
        return { result, error }
      }
      catch
      {
        let result = null;
        let error =  new RTError(
          other.pos_start, other.pos_end,
          'the index is out of the range of the list',
          this.context
        )
        
        return { result, error } 
      }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other)
      return { result, error }
    }
  }
  
  dived_by(other)
  {
    
    if (other instanceof Number)
    {

      let result = null;
      let error =  new RTError(
          other.pos_start, other.pos_end,
          'list can not followed by /, should use -> ',
          this.context)
        
        
      return { result, error } 
      
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other)
      return { result, error }
    }
  }
  
  copy()
  {
    let copy = new List(this.elements)
    copy.set_pos(this.pos_start, this.pos_end)
    copy.set_context(this.context)
    return copy
  }
  
  str()
  {
    let string_return = ", ";
    for( let i=0; i < this.elements.length; i++)
    {
      //string_return.concat(new String_complier(this.elements[i]).str())
    }
    return string_return
  }
  
  repr()
  {
  
    let string_return = ", ";
    for( let i=0; i < this.elements.length; i++)
    {
      //string_return.concat(new String_complier(this.elements[i]).repr())
    }
    return string_return
  }
}



//#######################################
//# RUN
//#######################################

let global_symbol_table = new SymbolTable()
global_symbol_table.set("NULL", new Number(0))
global_symbol_table.set("FALSE", new Number(0))
global_symbol_table.set("TRUE", new Number(1))
global_symbol_table.set("MATH_PI", new Number(Math.PI))
global_symbol_table.set("PRINT", BuiltInFunction.print)
global_symbol_table.set("NUMBER_TO_STRING", BuiltInFunction.number_to_string)
global_symbol_table.set("PRINT_RET", BuiltInFunction.print_ret)
global_symbol_table.set("INPUT", BuiltInFunction.input)
global_symbol_table.set("INPUT_INT", BuiltInFunction.input_int)
global_symbol_table.set("CLEAR", BuiltInFunction.clear)
global_symbol_table.set("CLS", BuiltInFunction.clear)
global_symbol_table.set("IS_NUM", BuiltInFunction.is_number)
global_symbol_table.set("IS_STR", BuiltInFunction.is_string)
global_symbol_table.set("IS_LIST", BuiltInFunction.is_list)
global_symbol_table.set("IS_FUN", BuiltInFunction.is_function)
global_symbol_table.set("APPEND", BuiltInFunction.append)
global_symbol_table.set("POP", BuiltInFunction.pop)
global_symbol_table.set("EXTEND", BuiltInFunction.extend)
global_symbol_table.set("LEN", BuiltInFunction.len)
global_symbol_table.set("RUN", BuiltInFunction.run)
global_symbol_table.set("DIV_ADD", BuiltInFunction.div_add)
global_symbol_table.set("FUNCTION_ADD", BuiltInFunction.function_add)
global_symbol_table.set("SRC_ADD", BuiltInFunction.src_add)
global_symbol_table.set("WAIT", BuiltInFunction.wait)
global_symbol_table.set("FUNCTION_BIND", BuiltInFunction.function_bind)
global_symbol_table.set("FUNCTION_RUN", BuiltInFunction.function_run);

global_symbol_table.set("DIV_CREATE_PRE_WITH_ID", BuiltInFunction.div_create_pre_with_id)
global_symbol_table.set("DIV_CREATE_POST_WITH_ID", BuiltInFunction.div_create_post_with_id)
global_symbol_table.set("DIV_CREATE_CHILD_PRE_WITH_ID", BuiltInFunction.div_create_child_pre_with_id)
global_symbol_table.set("DIV_CREATE_CHILD_POST_WITH_ID", BuiltInFunction.div_create_child_post_with_id)

global_symbol_table.set("DIV_CREATE_PRE_WITH_CLASS", BuiltInFunction.div_create_pre_with_class)
global_symbol_table.set("DIV_CREATE_POST_WITH_CLASS", BuiltInFunction.div_create_post_with_class)
global_symbol_table.set("DIV_CREATE_CHILD_PRE_WITH_CLASS", BuiltInFunction.div_create_child_pre_with_class)
global_symbol_table.set("DIV_CREATE_CHILD_POST_WITH_CLASS", BuiltInFunction.div_create_child_post_with_class)

global_symbol_table.set("DIV_CREATE_ATTRIBUTE_WITH_CLASS", BuiltInFunction.div_create_attribute_with_class)
global_symbol_table.set("DIV_CHANGE_ATTRIBUTE_WITH_CLASS", BuiltInFunction.div_change_attribute_with_class)
global_symbol_table.set("DIV_CHANGE_INNER_HTML_WITH_CLASS", BuiltInFunction.div_change_inner_html_with_class)
global_symbol_table.set("DIV_OVERWRITE_STYLE_WITH_CLASS", BuiltInFunction.div_overwrite_style_with_class)
global_symbol_table.set("DIV_ADD_STYLE_WITH_CLASS", BuiltInFunction.div_add_style_with_class)
global_symbol_table.set("DIV_ADD_INSIDE_WITH_CLASS", BuiltInFunction.div_add_inside_with_class)
global_symbol_table.set("DIV_REMOVE_WITH_CLASS", BuiltInFunction.div_remove_with_class)
global_symbol_table.set("EVENT_ADD_WITH_CLASS", BuiltInFunction.event_add_with_class)
global_symbol_table.set("EVENT_ALL_REMOVE_WITH_CLASS", BuiltInFunction.event_all_remove_with_class);

global_symbol_table.set("DIV_CREATE_ATTRIBUTE_WITH_ID", BuiltInFunction.div_create_attribute_with_id)
global_symbol_table.set("DIV_CHANGE_ATTRIBUTE_WITH_ID", BuiltInFunction.div_change_attribute_with_id)
global_symbol_table.set("DIV_CHANGE_INNER_HTML_WITH_ID", BuiltInFunction.div_change_inner_html_with_id)
global_symbol_table.set("DIV_OVERWRITE_STYLE_WITH_ID", BuiltInFunction.div_overwrite_style_with_id)
global_symbol_table.set("DIV_ADD_STYLE_WITH_ID", BuiltInFunction.div_add_style_with_id)
global_symbol_table.set("DIV_ADD_INSIDE_WITH_ID", BuiltInFunction.div_add_inside_with_id)
global_symbol_table.set("DIV_REMOVE_WITH_ID", BuiltInFunction.div_remove_with_id)
global_symbol_table.set("EVENT_ADD_WITH_ID", BuiltInFunction.event_add_with_id)
global_symbol_table.set("EVENT_ALL_REMOVE_WITH_ID", BuiltInFunction.event_all_remove_with_id);



function run(fn, text)
{

  let lexer = new Lexer(fn, text)
  let { tokens, error } = lexer.make_tokens()

  if(error!=null)
  {
    output =  "\n" + error.error_name + ": " + error.details + "\n" + "在文件["+ error.pos_start.fn+"],"+ " 错误起始位置: " + "行数[" + error.pos_start.ln+"], " + "列数[" + error.pos_start.col +"]";
  
    self.postMessage(output);
  }

  let parser = new Parser(tokens)
  let ast = parser.parse()

  if(ast.error)
  {
    output = "\n" + ast.error.error_name + ": " + ast.error.details + "\n" + "在文件["+ ast.error.pos_start.fn+"],"+ " 错误起始位置: " + "行数[" + ast.error.pos_start.ln+"], " + "列数[" + ast.error.pos_start.col +"]";  
    self.postMessage(output);
  }

  let interpreter = new Interpreter()
  interpreter.get_global_scope(global_scope)


  let context = new Context('<program>')
  context.symbol_table = global_symbol_table
  let result = interpreter.visit(ast.node, context)


  if(result.error)
  {
    output = "\n" + result.error.error_name + 
      ": " + result.error.details + "\n" + "在文件["+ result.error.pos_start.fn+"],"+ 
      " 错误起始位置: " + "行数[" + result.error.pos_start.ln+"], " + 
      "列数[" + result.error.pos_start.col +"]" +
      result.error.as_string(); 
    self.postMessage(output); 
  }

  return { tokens, error }
}



// Respond to messages from the main thread
self.onmessage = (e) => {

  const { data } = e;
  run('<stdin>', data+'\n')
  self.postMessage("END");
  
};
