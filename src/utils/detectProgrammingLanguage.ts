export function detectProgrammingLanguage(code: string): string | undefined {
    const keywords: [string, RegExp][] = [
        ['javascript', /function |const |let |var |console\.log\(|require\(/],
        ['python', /def |import |print\(|self|lambda'/],
        ['java', /public class |System\.out\.println\(|import java\./],
        ['cpp', /#include <|std::|int main\(|using namespace std;/],
        ['csharp', /using System;|Console\.WriteLine\(|namespace /],
        ['php', /<\?php|echo |\$this->|function /],
        ['ruby', /def |puts |end|require /],
        ['html', /<!doctype |<html|<body|<div|<\w+[ >]|\/\w+>/i],
        ['css', /\w+ *{/]
    ]
    for (const keyword of keywords) {
        if (keyword[1].test(code)) {
            return keyword[0]
        }
    }
    return undefined
}
