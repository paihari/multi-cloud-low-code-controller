import {
  isProperty,
  format,
} from "./deps.ts";

const INDENT_START = /[\{\[]/;
const INDENT_END = /[\}\]]/;

// from https://mathiasbynens.be/notes/reserved-keywords
const RESERVED = [
  'do',
  'if',
  'in',
  'for',
  'let',
  'new',
  'try',
  'var',
  'case',
  'else',
  'enum',
  'eval',
  'null',
  'this',
  'true',
  'void',
  'with',
  'await',
  'break',
  'catch',
  'class',
  'const',
  'false',
  'super',
  'throw',
  'while',
  'yield',
  'delete',
  'export',
  'import',
  'public',
  'return',
  'static',
  'switch',
  'typeof',
  'default',
  'extends',
  'finally',
  'package',
  'private',
  'continue',
  'debugger',
  'function',
  'arguments',
  'interface',
  'protected',
  'implements',
  'instanceof',
  'NaN',
  'undefined'
]

// deno-lint-ignore no-explicit-any
const RESERVED_MAP: any = {};

for (let i = 0; i < RESERVED.length; i++) {
  RESERVED_MAP[RESERVED[i]] = true
}

function isVariable(name: string) {
  // deno-lint-ignore no-prototype-builtins
  return isProperty(name) && !RESERVED_MAP.hasOwnProperty(name)
}

const formats = {
  s: function(s: string) {
    return '' + s
  },
  d: function(d: number) {
    return '' + Number(d)
  },
  // deno-lint-ignore no-explicit-any
  o: function(o: any) {
    return JSON.stringify(o)
  }
}

// deno-lint-ignore no-explicit-any
function genfun(...args: any[]) {
  // deno-lint-ignore no-explicit-any
  const lines: any[] = []
  let indent = 0
  // deno-lint-ignore no-explicit-any
  const vars: any = {}

  const push = function(str: string) {
    let spaces = ''
    while (spaces.length < indent*2) spaces += '  '
    lines.push(spaces+str)
  }

  const pushLine = function(line: string) {
    if (INDENT_END.test(line.trim()[0]) && INDENT_START.test(line[line.length-1])) {
      indent--
      push(line)
      indent++
      return
    }
    if (INDENT_START.test(line[line.length-1])) {
      push(line)
      indent++
      return
    }
    if (INDENT_END.test(line.trim()[0])) {
      indent--
      push(line)
      return
    }

    push(line)
  }

  // deno-lint-ignore no-explicit-any
  const line = function(...args: any[]) {
    const fmt: string = args[0];
    if (!fmt) return line

    if (arguments.length === 1 && fmt.indexOf('\n') > -1) {
      const lines = fmt.trim().split('\n')
      for (let i = 0; i < lines.length; i++) {
        pushLine(lines[i].trim())
      }
    } else {
      pushLine(format.apply(undefined, args))
    }

    return line
  }

  line.scope = {}
  line.formats = formats

  line.sym = function(name: string) {
    if (!name || !isVariable(name)) name = 'tmp'
    if (!vars[name]) vars[name] = 0
    return name + (vars[name]++ || '')
  }

  // deno-lint-ignore no-explicit-any
  line.property = function(obj: any, name: string) {
    if (arguments.length === 1) {
      name = obj
      obj = ''
    }

    name = name + ''

    if (isProperty(name)) return (obj ? obj + '.' + name : name)
    return obj ? obj + '[' + JSON.stringify(name) + ']' : JSON.stringify(name)
  }

  line.toString = function() {
    return lines.join('\n')
  }

  // deno-lint-ignore no-explicit-any
  line.toFunction = function(scope: any) {
    if (!scope) scope = {}

    const src = 'return ('+line.toString()+')'

    Object.keys(line.scope).forEach(function (key) {
      if (!scope[key]) scope[key] = line.scope[key]
    })

    const keys = Object.keys(scope).map(function(key) {
      return key
    })

    const vals = keys.map(function(key) {
      return scope[key]
    })

    return Function.apply(null, keys.concat(src)).apply(null, vals)
  }

  // deno-lint-ignore no-explicit-any
  if (args.length) line.apply(null, <any>args)

  return line
}

genfun.formats = formats;
export { genfun }