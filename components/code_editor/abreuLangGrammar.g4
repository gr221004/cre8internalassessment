grammar abreuLangGrammar;

abreuExpressions : (speakExpression)* (changeBgExpression)* (narrateExpression)*;

speakExpression : SPEAK CHARACTER STRING EOL;
changeBgExpression : BACKGROUND STRING EOL;
narrateExpression : SPEAK NARRATE STRING EOL;


CHARACTER: 'CHARACTER';
SPEAK : 'SPEAK';
BACKGROUND: 'BACKGROUND';
NARRATE: 'NARRATE';
STRING: '"' ~ ["]* '"';
EOL: [\r\n] +;
WS: [ \t] -> skip;
