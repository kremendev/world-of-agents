# World of Agents voice. The team pane starts it with exactly this argument list, and nothing else:
#   powershell.exe -NoProfile -NonInteractive -ExecutionPolicy RemoteSigned -File <plugin>/voice/speak.ps1
# and writes the line to say on stdin. No argument, variable or file reaches it.
#
# It reads stdin as UTF-8, keeps at most 200 code points, and speaks the text as plain text with Speak. Never SSML:
# no text it is given can change how it is read, let alone run. ASCII only: Windows PowerShell 5.1 reads a script
# without a byte order mark in the system code page.

# Before anything reads stdin, or text that isn't English arrives garbled.
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
$text = [Console]::In.ReadToEnd()

# The pane caps the line already. Cap it again here, at a code point, so a pair of surrogates is never split.
$max = 200
$kept = New-Object System.Text.StringBuilder
$count = 0
for ($i = 0; $i -lt $text.Length -and $count -lt $max; $i++) {
    [void]$kept.Append($text[$i])
    if ([char]::IsHighSurrogate($text[$i]) -and $i + 1 -lt $text.Length) {
        $i++
        [void]$kept.Append($text[$i])
    }
    $count++
}
$text = $kept.ToString()
if ([string]::IsNullOrWhiteSpace($text)) { exit 0 }

Add-Type -AssemblyName System.Speech
$voice = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
    $voice.Speak($text)
}
finally {
    $voice.Dispose()
}
